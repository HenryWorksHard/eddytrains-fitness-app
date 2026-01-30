// ===== App State =====
let currentUser = null;
let currentProgram = 'push';
let progressChart = null;
let selectedGoal = 'maintain';

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// ===== Initialize App =====
function initApp() {
    // Check for existing session
    const session = localStorage.getItem('eddytrains_session');
    if (session) {
        currentUser = JSON.parse(session);
        showApp();
    }

    // Event Listeners
    setupEventListeners();
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Login Form
    document.getElementById('login-form').addEventListener('submit', handleLogin);

    // Logout
    document.getElementById('logout-btn').addEventListener('click', handleLogout);

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            navigateTo(view);
        });
    });

    // Program Tabs
    document.querySelectorAll('.program-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.program-tab').forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentProgram = e.currentTarget.dataset.program;
            renderWorkoutList();
        });
    });

    // Nutrition Form
    document.getElementById('nutrition-form').addEventListener('submit', handleNutritionCalc);

    // Goal Buttons
    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            selectedGoal = e.currentTarget.dataset.goal;
        });
    });

    // Progress Tabs
    document.querySelectorAll('.progress-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.progress-tab').forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            const tabId = e.currentTarget.dataset.tab;
            document.querySelectorAll('.progress-content').forEach(c => c.classList.remove('active'));
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Photo Upload
    document.getElementById('photo-input').addEventListener('change', handlePhotoUpload);
}

// ===== Authentication =====
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check demo credentials
    if (email === demoUser.email && password === demoUser.password) {
        currentUser = { ...demoUser };
        localStorage.setItem('eddytrains_session', JSON.stringify(currentUser));
        showApp();
    } else {
        // For demo, accept any email/password
        currentUser = {
            email: email,
            name: email.split('@')[0],
            oneRepMaxes: { squat: 100, bench: 80, deadlift: 120, ohp: 50, row: 70 },
            stats: { workoutsThisWeek: 0, currentStreak: 0, totalVolume: 0 },
            progressHistory: {
                dates: ['Week 1'],
                squat: [100],
                bench: [80],
                deadlift: [120]
            },
            photos: []
        };
        localStorage.setItem('eddytrains_session', JSON.stringify(currentUser));
        showApp();
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('eddytrains_session');
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('app-container').classList.add('hidden');
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

function showApp() {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-container').classList.remove('hidden');
    
    // Update greeting
    const firstName = currentUser.name.split(' ')[0];
    document.getElementById('user-greeting').textContent = `Hey, ${firstName}!`;
    
    // Initialize views
    renderDashboard();
    renderWorkoutList();
    update1RMDisplay();
    renderProgressChart();
    renderPhotoGallery();
}

// ===== Navigation =====
function navigateTo(viewName) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewName);
    });

    // Update views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(`${viewName}-view`).classList.add('active');

    // Update header title
    const titles = {
        dashboard: 'Dashboard',
        workouts: 'Workouts',
        nutrition: 'Nutrition',
        progress: 'Progress',
        cardio: 'Cardio',
        hyrox: 'Hyrox Training'
    };
    document.getElementById('page-title').textContent = titles[viewName] || 'EddyTrains';
}

// ===== Dashboard =====
function renderDashboard() {
    // Update stats
    document.getElementById('workouts-this-week').textContent = currentUser.stats.workoutsThisWeek;
    document.getElementById('current-streak').textContent = currentUser.stats.currentStreak;
    document.getElementById('total-volume').textContent = formatNumber(currentUser.stats.totalVolume);

    // Render today's workout preview
    const todayWorkout = getTodaysWorkout();
    document.getElementById('today-program').textContent = todayWorkout.name;
    
    const previewHtml = todayWorkout.exercises.slice(0, 4).map(ex => `
        <div class="preview-exercise">
            <span class="name">${ex.name}</span>
            <span class="details">${ex.sets} x ${ex.reps}</span>
        </div>
    `).join('') + (todayWorkout.exercises.length > 4 ? `
        <div class="preview-exercise">
            <span class="name">+ ${todayWorkout.exercises.length - 4} more exercises</span>
        </div>
    ` : '');
    
    document.getElementById('today-workout-content').innerHTML = previewHtml;
}

function getTodaysWorkout() {
    // Rotate through programs based on day of week
    const programs = ['push', 'pull', 'legs', 'push', 'pull', 'legs', 'upper'];
    const today = new Date().getDay();
    const programKey = programs[today];
    return workoutPrograms[programKey];
}

// ===== Workouts =====
function renderWorkoutList() {
    const program = workoutPrograms[currentProgram];
    const container = document.getElementById('workout-list');
    
    container.innerHTML = program.exercises.map(exercise => {
        const weight = calculateWeight(exercise);
        
        return `
            <div class="workout-item">
                <div class="workout-item-header">
                    <div>
                        <div class="exercise-name">${exercise.name}</div>
                        <div class="exercise-muscle">${exercise.muscle}</div>
                    </div>
                    <div class="exercise-stats">
                        <div class="stat">
                            <div class="stat-num">${exercise.sets}</div>
                            <div class="stat-text">Sets</div>
                        </div>
                        <div class="stat">
                            <div class="stat-num">${exercise.reps}</div>
                            <div class="stat-text">Reps</div>
                        </div>
                    </div>
                </div>
                <div class="workout-item-footer">
                    <div class="weight-suggestion">
                        ${weight ? `Suggested: <strong>${weight}kg</strong> (${exercise.percentRM}% 1RM)` : 
                                  `Weight: <strong>${exercise.weight || 'As needed'}</strong>`}
                    </div>
                    <button class="tutorial-btn" onclick="showExerciseTutorial('${exercise.id}', '${currentProgram}')">
                        <i class="fas fa-play-circle"></i> Tutorial
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function calculateWeight(exercise) {
    if (!exercise.percentRM || !exercise.rmKey) return null;
    
    const oneRM = currentUser.oneRepMaxes[exercise.rmKey];
    if (!oneRM) return null;
    
    const weight = Math.round((oneRM * exercise.percentRM / 100) / 2.5) * 2.5;
    return weight;
}

function showExerciseTutorial(exerciseId, programKey) {
    const program = workoutPrograms[programKey];
    const exercise = program.exercises.find(e => e.id === exerciseId);
    
    if (!exercise) return;
    
    const modal = document.getElementById('exercise-modal');
    const detail = document.getElementById('exercise-detail');
    
    detail.innerHTML = `
        <h2>${exercise.name}</h2>
        <p class="exercise-muscle">${exercise.muscle}</p>
        
        <div class="exercise-video">
            ${exercise.videoUrl ? 
                `<iframe src="${exercise.videoUrl}" frameborder="0" allowfullscreen></iframe>` :
                `<i class="fas fa-video"></i> Video coming soon`
            }
        </div>
        
        <div class="exercise-instructions">
            <h4><i class="fas fa-list-ol"></i> Instructions</h4>
            <ol>
                ${exercise.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
        </div>
        
        ${exercise.tips ? `
            <div class="exercise-tips">
                <h4>Pro Tips</h4>
                <ul>
                    ${exercise.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
    `;
    
    modal.classList.remove('hidden');
}

function closeExerciseModal() {
    document.getElementById('exercise-modal').classList.add('hidden');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('exercise-modal');
    if (e.target === modal) {
        closeExerciseModal();
    }
});

// ===== Nutrition Calculator =====
function handleNutritionCalc(e) {
    e.preventDefault();
    
    const age = parseInt(document.getElementById('user-age').value);
    const gender = document.getElementById('user-gender').value;
    const weight = parseFloat(document.getElementById('user-weight').value);
    const height = parseFloat(document.getElementById('user-height').value);
    const activityLevel = parseFloat(document.getElementById('activity-level').value);
    
    // Calculate BMR using Mifflin-St Jeor equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calculate TDEE
    let tdee = bmr * activityLevel;
    
    // Adjust for goal
    let targetCalories;
    let proteinMultiplier;
    let tips = [];
    
    switch (selectedGoal) {
        case 'lose':
            targetCalories = Math.round(tdee - 500);
            proteinMultiplier = 2.2; // Higher protein when cutting
            tips = [
                '🎯 500 calorie deficit = ~0.5kg/week fat loss',
                '🥩 Keep protein high to preserve muscle',
                '💧 Drink plenty of water - often hunger is thirst',
                '🥗 Fill up on vegetables for volume with low calories',
                '⏰ Consider intermittent fasting if it suits you'
            ];
            break;
        case 'gain':
            targetCalories = Math.round(tdee + 300);
            proteinMultiplier = 2.0;
            tips = [
                '📈 300 calorie surplus for lean gains',
                '🥩 ~2g protein per kg bodyweight',
                '🍚 Don\'t fear carbs - they fuel your training',
                '🛏️ Sleep 7-9 hours for optimal recovery',
                '📊 Aim for 0.25-0.5kg gain per week'
            ];
            break;
        default:
            targetCalories = Math.round(tdee);
            proteinMultiplier = 1.8;
            tips = [
                '⚖️ Maintenance = same calories in as out',
                '🥩 ~1.8g protein per kg for active individuals',
                '🔄 Great for body recomposition',
                '📈 Focus on progressive overload in training',
                '🎯 Adjust if weight changes unexpectedly'
            ];
    }
    
    // Calculate macros
    const protein = Math.round(weight * proteinMultiplier);
    const proteinCals = protein * 4;
    
    const fats = Math.round(weight * 0.9); // 0.9g per kg
    const fatCals = fats * 9;
    
    const remainingCals = targetCalories - proteinCals - fatCals;
    const carbs = Math.round(remainingCals / 4);
    
    // Update display
    document.getElementById('daily-calories').textContent = targetCalories;
    document.getElementById('protein-grams').textContent = `${protein}g`;
    document.getElementById('carbs-grams').textContent = `${carbs}g`;
    document.getElementById('fats-grams').textContent = `${fats}g`;
    
    // Update tips
    document.getElementById('nutrition-tips-list').innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
    
    // Show results
    document.getElementById('nutrition-results').classList.remove('hidden');
}

// ===== Progress Tracking =====
function update1RMDisplay() {
    const rms = currentUser.oneRepMaxes;
    document.getElementById('squat-current').textContent = rms.squat ? `Current: ${rms.squat}kg` : '--';
    document.getElementById('bench-current').textContent = rms.bench ? `Current: ${rms.bench}kg` : '--';
    document.getElementById('deadlift-current').textContent = rms.deadlift ? `Current: ${rms.deadlift}kg` : '--';
    document.getElementById('ohp-current').textContent = rms.ohp ? `Current: ${rms.ohp}kg` : '--';
    document.getElementById('row-current').textContent = rms.row ? `Current: ${rms.row}kg` : '--';
}

function save1RMs() {
    const squat = document.getElementById('squat-1rm').value;
    const bench = document.getElementById('bench-1rm').value;
    const deadlift = document.getElementById('deadlift-1rm').value;
    const ohp = document.getElementById('ohp-1rm').value;
    const row = document.getElementById('row-1rm').value;
    
    if (squat) currentUser.oneRepMaxes.squat = parseInt(squat);
    if (bench) currentUser.oneRepMaxes.bench = parseInt(bench);
    if (deadlift) currentUser.oneRepMaxes.deadlift = parseInt(deadlift);
    if (ohp) currentUser.oneRepMaxes.ohp = parseInt(ohp);
    if (row) currentUser.oneRepMaxes.row = parseInt(row);
    
    // Update history
    const today = new Date().toLocaleDateString();
    if (!currentUser.progressHistory.dates.includes(today)) {
        currentUser.progressHistory.dates.push(today);
        currentUser.progressHistory.squat.push(currentUser.oneRepMaxes.squat);
        currentUser.progressHistory.bench.push(currentUser.oneRepMaxes.bench);
        currentUser.progressHistory.deadlift.push(currentUser.oneRepMaxes.deadlift);
    }
    
    // Save to localStorage
    localStorage.setItem('eddytrains_session', JSON.stringify(currentUser));
    
    // Update display
    update1RMDisplay();
    renderProgressChart();
    renderWorkoutList(); // Refresh weights
    
    // Clear inputs
    document.getElementById('squat-1rm').value = '';
    document.getElementById('bench-1rm').value = '';
    document.getElementById('deadlift-1rm').value = '';
    document.getElementById('ohp-1rm').value = '';
    document.getElementById('row-1rm').value = '';
    
    // Show feedback
    showToast('1RM values saved!');
}

function renderProgressChart() {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    
    if (progressChart) {
        progressChart.destroy();
    }
    
    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: currentUser.progressHistory.dates,
            datasets: [
                {
                    label: 'Squat',
                    data: currentUser.progressHistory.squat,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Bench',
                    data: currentUser.progressHistory.bench,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Deadlift',
                    data: currentUser.progressHistory.deadlift,
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#a0a0b0'
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#6b6b7b'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#6b6b7b'
                    }
                }
            }
        }
    });
}

// ===== Photo Upload =====
function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const photo = {
            data: event.target.result,
            date: new Date().toLocaleDateString()
        };
        
        currentUser.photos.unshift(photo);
        
        // Keep only last 12 photos
        if (currentUser.photos.length > 12) {
            currentUser.photos = currentUser.photos.slice(0, 12);
        }
        
        localStorage.setItem('eddytrains_session', JSON.stringify(currentUser));
        renderPhotoGallery();
        showToast('Photo uploaded!');
    };
    reader.readAsDataURL(file);
}

function renderPhotoGallery() {
    const gallery = document.getElementById('photo-gallery');
    
    if (currentUser.photos.length === 0) {
        gallery.innerHTML = `
            <div class="photo-item" style="display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                <i class="fas fa-camera" style="font-size: 24px;"></i>
            </div>
        `;
        return;
    }
    
    gallery.innerHTML = currentUser.photos.map(photo => `
        <div class="photo-item">
            <img src="${photo.data}" alt="Progress photo">
            <div class="photo-date">${photo.date}</div>
        </div>
    `).join('');
}

// ===== Cardio Workouts =====
function showCardioWorkout(type) {
    const workout = cardioWorkouts[type];
    const detail = document.getElementById('cardio-detail');
    
    let contentHtml = `
        <h3>${workout.name}</h3>
        <div style="display: flex; gap: 16px; margin: 16px 0; flex-wrap: wrap;">
            <span style="background: var(--bg-elevated); padding: 8px 16px; border-radius: 20px;">
                <i class="fas fa-clock"></i> ${workout.duration}
            </span>
            <span style="background: var(--bg-elevated); padding: 8px 16px; border-radius: 20px;">
                <i class="fas fa-heartbeat"></i> ${workout.heartRate}
            </span>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${workout.description}</p>
    `;
    
    if (workout.options) {
        contentHtml += `
            <h4 style="margin-bottom: 12px;">Options:</h4>
            <ul style="list-style: none;">
                ${workout.options.map(opt => `
                    <li style="padding: 12px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 8px;">
                        <strong>${opt.activity}</strong><br>
                        <span style="color: var(--text-muted);">${opt.details} • ${opt.duration}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    }
    
    if (workout.workout) {
        contentHtml += `
            <h4 style="margin-bottom: 12px;">Workout Structure:</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                ${workout.workout.map(phase => `
                    <div style="display: flex; justify-content: space-between; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
                        <div>
                            <strong>${phase.phase}</strong>
                            <div style="color: var(--text-muted); font-size: 14px;">${phase.details}</div>
                        </div>
                        <span style="color: var(--accent-primary); font-weight: 600;">${phase.duration}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    contentHtml += `
        <div style="margin-top: 20px; padding: 16px; background: rgba(255, 107, 53, 0.1); border-radius: 12px; border-left: 3px solid var(--accent-primary);">
            <h4 style="color: var(--accent-primary); margin-bottom: 8px;">💡 Tips</h4>
            <ul style="list-style: none; color: var(--text-secondary);">
                ${workout.tips.map(tip => `<li style="margin-bottom: 4px;">• ${tip}</li>`).join('')}
            </ul>
        </div>
    `;
    
    detail.innerHTML = contentHtml;
    detail.classList.remove('hidden');
}

// ===== Hyrox Workouts =====
function showHyroxWorkout(type) {
    const workout = hyroxWorkouts[type];
    const detail = document.getElementById('hyrox-detail');
    
    let contentHtml = `
        <h3>${workout.name}</h3>
        <div style="display: flex; gap: 16px; margin: 16px 0; flex-wrap: wrap;">
            <span style="background: var(--bg-elevated); padding: 8px 16px; border-radius: 20px;">
                <i class="fas fa-clock"></i> ${workout.duration}
            </span>
            <span style="background: var(--bg-elevated); padding: 8px 16px; border-radius: 20px;">
                <i class="fas fa-fire"></i> ${workout.intensity}
            </span>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${workout.description}</p>
    `;
    
    if (workout.stations) {
        contentHtml += `
            <h4 style="margin-bottom: 12px;">Race Stations:</h4>
            <div style="display: flex; flex-direction: column; gap: 8px; max-height: 400px; overflow-y: auto;">
                ${workout.stations.map((station, idx) => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
                        <div>
                            <strong style="color: var(--accent-primary);">${station.name}</strong>
                            <div style="color: var(--text-muted); font-size: 13px;">${station.details}</div>
                        </div>
                        <span style="color: var(--text-secondary); font-size: 14px;">${station.target}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (workout.workout) {
        contentHtml += `
            <h4 style="margin-bottom: 12px;">Workout:</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                ${workout.workout.map(ex => `
                    <div style="padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <strong>${ex.name}</strong>
                            <span style="color: var(--accent-primary);">${ex.details}</span>
                        </div>
                        ${ex.focus ? `<div style="color: var(--text-muted); font-size: 13px;">Focus: ${ex.focus}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (workout.weeklyPlan) {
        contentHtml += `
            <h4 style="margin: 20px 0 12px;">Weekly Plan:</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                ${workout.weeklyPlan.map(day => `
                    <div style="display: flex; justify-content: space-between; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
                        <strong>${day.day}</strong>
                        <span style="color: var(--text-secondary);">${day.workout}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    contentHtml += `
        <div style="margin-top: 20px; padding: 16px; background: rgba(255, 107, 53, 0.1); border-radius: 12px; border-left: 3px solid var(--accent-primary);">
            <h4 style="color: var(--accent-primary); margin-bottom: 8px;">💡 Tips</h4>
            <ul style="list-style: none; color: var(--text-secondary);">
                ${workout.tips.map(tip => `<li style="margin-bottom: 4px;">• ${tip}</li>`).join('')}
            </ul>
        </div>
    `;
    
    detail.innerHTML = contentHtml;
    detail.classList.remove('hidden');
}

// ===== Utilities =====
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent-gradient);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 500;
        z-index: 1000;
        animation: slideUp 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Add animations to head
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from { transform: translate(-50%, 20px); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
