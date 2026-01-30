// ===== Workout Programs Data =====

const workoutPrograms = {
    push: {
        name: 'Push Day',
        description: 'Chest, Shoulders, Triceps',
        exercises: [
            {
                id: 'bench-press',
                name: 'Barbell Bench Press',
                muscle: 'Chest',
                sets: 4,
                reps: '6-8',
                percentRM: 80,
                rmKey: 'bench',
                videoUrl: 'https://www.youtube.com/embed/rT7DgCr-3pg',
                instructions: [
                    'Lie flat on the bench with feet firmly on the ground',
                    'Grip the bar slightly wider than shoulder width',
                    'Unrack the bar and lower it to mid-chest',
                    'Press the bar up, keeping elbows at 45-degree angle',
                    'Lock out at the top without bouncing'
                ],
                tips: ['Keep shoulder blades retracted', 'Drive through your heels', 'Control the descent - 2 seconds down']
            },
            {
                id: 'incline-db-press',
                name: 'Incline Dumbbell Press',
                muscle: 'Upper Chest',
                sets: 3,
                reps: '8-10',
                percentRM: 70,
                rmKey: 'bench',
                videoUrl: 'https://www.youtube.com/embed/8iPEnn-ltC8',
                instructions: [
                    'Set bench to 30-45 degree incline',
                    'Hold dumbbells at shoulder level',
                    'Press up and slightly inward',
                    'Lower with control to starting position'
                ],
                tips: ['Don\'t let dumbbells drift too wide', 'Full range of motion']
            },
            {
                id: 'ohp',
                name: 'Overhead Press',
                muscle: 'Shoulders',
                sets: 4,
                reps: '6-8',
                percentRM: 80,
                rmKey: 'ohp',
                videoUrl: 'https://www.youtube.com/embed/2yjwXTZQDDI',
                instructions: [
                    'Stand with feet shoulder-width apart',
                    'Hold bar at shoulder level, grip slightly wider than shoulders',
                    'Press bar overhead, moving head back slightly',
                    'Lock out at the top, bring head through',
                    'Lower with control'
                ],
                tips: ['Brace your core throughout', 'Keep bar path straight', 'Don\'t arch your back excessively']
            },
            {
                id: 'lateral-raises',
                name: 'Lateral Raises',
                muscle: 'Side Delts',
                sets: 3,
                reps: '12-15',
                percentRM: null,
                weight: 'Light',
                videoUrl: 'https://www.youtube.com/embed/3VcKaXpzqRo',
                instructions: [
                    'Stand with dumbbells at your sides',
                    'Raise arms out to the sides until parallel with floor',
                    'Lead with elbows, slight bend in arms',
                    'Lower slowly with control'
                ],
                tips: ['Don\'t swing the weight', 'Pinky should be slightly higher than thumb', 'Focus on the squeeze at top']
            },
            {
                id: 'tricep-pushdown',
                name: 'Tricep Pushdowns',
                muscle: 'Triceps',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/2-LAMcpzODU',
                instructions: [
                    'Stand at cable machine with rope or bar attachment',
                    'Keep elbows pinned to your sides',
                    'Push down until arms are fully extended',
                    'Squeeze triceps at bottom',
                    'Slowly return to starting position'
                ],
                tips: ['Don\'t let elbows flare out', 'Keep core tight', 'Control the negative']
            },
            {
                id: 'dips',
                name: 'Tricep Dips',
                muscle: 'Triceps/Chest',
                sets: 3,
                reps: '8-12',
                percentRM: null,
                weight: 'Bodyweight',
                videoUrl: 'https://www.youtube.com/embed/2z8JmcrW-As',
                instructions: [
                    'Grip parallel bars and lift yourself up',
                    'Lower body by bending elbows',
                    'Go until upper arms are parallel to floor',
                    'Push back up to starting position'
                ],
                tips: ['Lean forward slightly for chest emphasis', 'Stay upright for tricep emphasis', 'Add weight when bodyweight becomes easy']
            }
        ]
    },
    pull: {
        name: 'Pull Day',
        description: 'Back, Biceps, Rear Delts',
        exercises: [
            {
                id: 'deadlift',
                name: 'Conventional Deadlift',
                muscle: 'Back/Posterior Chain',
                sets: 4,
                reps: '5-6',
                percentRM: 85,
                rmKey: 'deadlift',
                videoUrl: 'https://www.youtube.com/embed/op9kVnSso6Q',
                instructions: [
                    'Stand with feet hip-width apart, bar over mid-foot',
                    'Hinge at hips, grip bar just outside legs',
                    'Keep chest up, back flat, shoulders over bar',
                    'Drive through heels, push floor away',
                    'Stand tall, squeeze glutes at top',
                    'Lower by hinging at hips first'
                ],
                tips: ['Keep bar close to body', 'Don\'t round your lower back', 'Engage lats before lifting']
            },
            {
                id: 'barbell-row',
                name: 'Barbell Row',
                muscle: 'Back',
                sets: 4,
                reps: '8-10',
                percentRM: 75,
                rmKey: 'row',
                videoUrl: 'https://www.youtube.com/embed/FWJR5Ve8bnQ',
                instructions: [
                    'Hinge forward with flat back, slight knee bend',
                    'Grip bar slightly wider than shoulder width',
                    'Pull bar to lower chest/upper abs',
                    'Squeeze shoulder blades together',
                    'Lower with control'
                ],
                tips: ['Don\'t use momentum', 'Keep core braced', 'Lead with elbows']
            },
            {
                id: 'lat-pulldown',
                name: 'Lat Pulldown',
                muscle: 'Lats',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate-Heavy',
                videoUrl: 'https://www.youtube.com/embed/CAwf7n6Luuc',
                instructions: [
                    'Grip bar wider than shoulder width',
                    'Sit with thighs secured under pad',
                    'Pull bar to upper chest',
                    'Squeeze lats at bottom',
                    'Return slowly to full stretch'
                ],
                tips: ['Lean back slightly', 'Don\'t pull behind neck', 'Focus on lat engagement']
            },
            {
                id: 'face-pulls',
                name: 'Face Pulls',
                muscle: 'Rear Delts/Upper Back',
                sets: 3,
                reps: '15-20',
                percentRM: null,
                weight: 'Light',
                videoUrl: 'https://www.youtube.com/embed/rep-qVOkqgk',
                instructions: [
                    'Set cable at face height with rope attachment',
                    'Pull rope towards face, separating ends',
                    'External rotate at end position',
                    'Squeeze rear delts and upper back',
                    'Return with control'
                ],
                tips: ['Don\'t use too much weight', 'Focus on external rotation', 'Great for shoulder health']
            },
            {
                id: 'barbell-curl',
                name: 'Barbell Curl',
                muscle: 'Biceps',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/kwG2ipFRgfo',
                instructions: [
                    'Stand with feet shoulder-width apart',
                    'Grip bar at shoulder width, palms up',
                    'Curl bar up keeping elbows stationary',
                    'Squeeze biceps at top',
                    'Lower slowly'
                ],
                tips: ['Don\'t swing your body', 'Keep elbows pinned', 'Full range of motion']
            },
            {
                id: 'hammer-curl',
                name: 'Hammer Curls',
                muscle: 'Biceps/Brachialis',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/zC3nLlEvin4',
                instructions: [
                    'Hold dumbbells with neutral grip (palms facing each other)',
                    'Curl weights up keeping wrists neutral',
                    'Squeeze at top',
                    'Lower with control'
                ],
                tips: ['Alternate arms or do together', 'Builds forearm thickness', 'Don\'t swing']
            }
        ]
    },
    legs: {
        name: 'Leg Day',
        description: 'Quads, Hamstrings, Glutes, Calves',
        exercises: [
            {
                id: 'squat',
                name: 'Barbell Back Squat',
                muscle: 'Quads/Glutes',
                sets: 4,
                reps: '6-8',
                percentRM: 80,
                rmKey: 'squat',
                videoUrl: 'https://www.youtube.com/embed/bEv6CCg2BC8',
                instructions: [
                    'Position bar on upper back, grip slightly wider than shoulders',
                    'Unrack, feet shoulder-width or slightly wider',
                    'Break at hips and knees simultaneously',
                    'Descend until hip crease below knee',
                    'Drive up through heels, keeping chest up'
                ],
                tips: ['Keep core braced throughout', 'Knees track over toes', 'Don\'t let knees cave in']
            },
            {
                id: 'rdl',
                name: 'Romanian Deadlift',
                muscle: 'Hamstrings/Glutes',
                sets: 3,
                reps: '10-12',
                percentRM: 65,
                rmKey: 'deadlift',
                videoUrl: 'https://www.youtube.com/embed/7j-2w4-P14I',
                instructions: [
                    'Hold bar at hip level, slight knee bend',
                    'Hinge at hips, pushing them back',
                    'Lower bar along legs until hamstring stretch',
                    'Drive hips forward to return',
                    'Squeeze glutes at top'
                ],
                tips: ['Keep bar close to body', 'Feel the stretch in hamstrings', 'Don\'t round lower back']
            },
            {
                id: 'leg-press',
                name: 'Leg Press',
                muscle: 'Quads/Glutes',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Heavy',
                videoUrl: 'https://www.youtube.com/embed/IZxyjW7MPJQ',
                instructions: [
                    'Sit in machine with back flat against pad',
                    'Place feet shoulder-width on platform',
                    'Release safety and lower weight',
                    'Go until knees at 90 degrees',
                    'Press through heels to extend'
                ],
                tips: ['Don\'t lock knees at top', 'Keep lower back pressed into pad', 'High foot position = more glutes']
            },
            {
                id: 'leg-curl',
                name: 'Lying Leg Curl',
                muscle: 'Hamstrings',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/1Tq3QdYUuHs',
                instructions: [
                    'Lie face down on machine',
                    'Position pad above ankles',
                    'Curl weight up towards glutes',
                    'Squeeze hamstrings at top',
                    'Lower slowly'
                ],
                tips: ['Don\'t lift hips off pad', 'Control the negative', 'Point toes to increase contraction']
            },
            {
                id: 'leg-extension',
                name: 'Leg Extension',
                muscle: 'Quads',
                sets: 3,
                reps: '12-15',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/YyvSfVjQeL0',
                instructions: [
                    'Sit in machine with back against pad',
                    'Position pad above ankles',
                    'Extend legs fully',
                    'Squeeze quads at top',
                    'Lower with control'
                ],
                tips: ['Don\'t use momentum', 'Pause at top for max contraction', 'Good for quad isolation']
            },
            {
                id: 'calf-raises',
                name: 'Standing Calf Raises',
                muscle: 'Calves',
                sets: 4,
                reps: '15-20',
                percentRM: null,
                weight: 'Heavy',
                videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI',
                instructions: [
                    'Position shoulders under pads',
                    'Stand on edge of platform, heels hanging off',
                    'Lower heels for deep stretch',
                    'Rise up on toes as high as possible',
                    'Pause and squeeze at top'
                ],
                tips: ['Full range of motion is key', 'Pause at bottom and top', 'Go slow - calves respond to time under tension']
            }
        ]
    },
    upper: {
        name: 'Upper Body',
        description: 'Full Upper Body Workout',
        exercises: [
            {
                id: 'bench-press',
                name: 'Barbell Bench Press',
                muscle: 'Chest',
                sets: 4,
                reps: '6-8',
                percentRM: 80,
                rmKey: 'bench',
                videoUrl: 'https://www.youtube.com/embed/rT7DgCr-3pg',
                instructions: [
                    'Lie flat on the bench with feet firmly on the ground',
                    'Grip the bar slightly wider than shoulder width',
                    'Unrack the bar and lower it to mid-chest',
                    'Press the bar up, keeping elbows at 45-degree angle',
                    'Lock out at the top without bouncing'
                ],
                tips: ['Keep shoulder blades retracted', 'Drive through your heels', 'Control the descent']
            },
            {
                id: 'barbell-row',
                name: 'Barbell Row',
                muscle: 'Back',
                sets: 4,
                reps: '8-10',
                percentRM: 75,
                rmKey: 'row',
                videoUrl: 'https://www.youtube.com/embed/FWJR5Ve8bnQ',
                instructions: [
                    'Hinge forward with flat back, slight knee bend',
                    'Grip bar slightly wider than shoulder width',
                    'Pull bar to lower chest/upper abs',
                    'Squeeze shoulder blades together',
                    'Lower with control'
                ],
                tips: ['Don\'t use momentum', 'Keep core braced', 'Lead with elbows']
            },
            {
                id: 'ohp',
                name: 'Overhead Press',
                muscle: 'Shoulders',
                sets: 3,
                reps: '8-10',
                percentRM: 75,
                rmKey: 'ohp',
                videoUrl: 'https://www.youtube.com/embed/2yjwXTZQDDI',
                instructions: [
                    'Stand with feet shoulder-width apart',
                    'Hold bar at shoulder level, grip slightly wider than shoulders',
                    'Press bar overhead, moving head back slightly',
                    'Lock out at the top, bring head through',
                    'Lower with control'
                ],
                tips: ['Brace your core throughout', 'Keep bar path straight', 'Don\'t arch your back excessively']
            },
            {
                id: 'pull-ups',
                name: 'Pull-Ups',
                muscle: 'Back/Biceps',
                sets: 3,
                reps: 'Max',
                percentRM: null,
                weight: 'Bodyweight',
                videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g',
                instructions: [
                    'Hang from bar with overhand grip',
                    'Pull yourself up until chin over bar',
                    'Lower with control to full hang',
                    'Avoid swinging or kipping'
                ],
                tips: ['Engage lats before pulling', 'Chest to bar for full contraction', 'Add weight when needed']
            },
            {
                id: 'dumbbell-press',
                name: 'Dumbbell Shoulder Press',
                muscle: 'Shoulders',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/qEwKCR5JCog',
                instructions: [
                    'Sit with back supported',
                    'Hold dumbbells at shoulder level',
                    'Press up and slightly inward',
                    'Lower to starting position'
                ],
                tips: ['Don\'t lock out aggressively', 'Keep core tight', 'Full range of motion']
            },
            {
                id: 'bicep-curl',
                name: 'Dumbbell Curls',
                muscle: 'Biceps',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/ykJmrZ5v0Oo',
                instructions: [
                    'Stand with dumbbells at sides',
                    'Curl weight up, supinating wrist',
                    'Squeeze bicep at top',
                    'Lower slowly'
                ],
                tips: ['No swinging', 'Control the negative', 'Can alternate arms']
            }
        ]
    },
    lower: {
        name: 'Lower Body',
        description: 'Full Lower Body Workout',
        exercises: [
            {
                id: 'squat',
                name: 'Barbell Back Squat',
                muscle: 'Quads/Glutes',
                sets: 4,
                reps: '6-8',
                percentRM: 80,
                rmKey: 'squat',
                videoUrl: 'https://www.youtube.com/embed/bEv6CCg2BC8',
                instructions: [
                    'Position bar on upper back, grip slightly wider than shoulders',
                    'Unrack, feet shoulder-width or slightly wider',
                    'Break at hips and knees simultaneously',
                    'Descend until hip crease below knee',
                    'Drive up through heels, keeping chest up'
                ],
                tips: ['Keep core braced throughout', 'Knees track over toes', 'Don\'t let knees cave in']
            },
            {
                id: 'rdl',
                name: 'Romanian Deadlift',
                muscle: 'Hamstrings/Glutes',
                sets: 4,
                reps: '8-10',
                percentRM: 65,
                rmKey: 'deadlift',
                videoUrl: 'https://www.youtube.com/embed/7j-2w4-P14I',
                instructions: [
                    'Hold bar at hip level, slight knee bend',
                    'Hinge at hips, pushing them back',
                    'Lower bar along legs until hamstring stretch',
                    'Drive hips forward to return',
                    'Squeeze glutes at top'
                ],
                tips: ['Keep bar close to body', 'Feel the stretch in hamstrings', 'Don\'t round lower back']
            },
            {
                id: 'bulgarian-split',
                name: 'Bulgarian Split Squat',
                muscle: 'Quads/Glutes',
                sets: 3,
                reps: '10-12 each',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/2C-uNgKwPLE',
                instructions: [
                    'Stand with one foot on bench behind you',
                    'Hold dumbbells at sides',
                    'Lower until back knee nearly touches floor',
                    'Drive through front heel to stand',
                    'Complete all reps then switch legs'
                ],
                tips: ['Keep front knee over ankle', 'Torso upright', 'Great for imbalances']
            },
            {
                id: 'hip-thrust',
                name: 'Barbell Hip Thrust',
                muscle: 'Glutes',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Heavy',
                videoUrl: 'https://www.youtube.com/embed/SEdqd1n0cvg',
                instructions: [
                    'Sit with upper back against bench',
                    'Roll barbell over hips (use pad)',
                    'Drive hips up, squeezing glutes',
                    'Pause at top, chin tucked',
                    'Lower with control'
                ],
                tips: ['Push through heels', 'Don\'t hyperextend lower back', 'Pause and squeeze at top']
            },
            {
                id: 'leg-curl',
                name: 'Lying Leg Curl',
                muscle: 'Hamstrings',
                sets: 3,
                reps: '10-12',
                percentRM: null,
                weight: 'Moderate',
                videoUrl: 'https://www.youtube.com/embed/1Tq3QdYUuHs',
                instructions: [
                    'Lie face down on machine',
                    'Position pad above ankles',
                    'Curl weight up towards glutes',
                    'Squeeze hamstrings at top',
                    'Lower slowly'
                ],
                tips: ['Don\'t lift hips off pad', 'Control the negative', 'Point toes to increase contraction']
            },
            {
                id: 'calf-raises',
                name: 'Calf Raises',
                muscle: 'Calves',
                sets: 4,
                reps: '15-20',
                percentRM: null,
                weight: 'Heavy',
                videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI',
                instructions: [
                    'Stand on edge of step or platform',
                    'Lower heels for deep stretch',
                    'Rise up on toes as high as possible',
                    'Pause and squeeze at top',
                    'Lower slowly'
                ],
                tips: ['Full range of motion', 'Pause at bottom and top', 'Slow and controlled']
            }
        ]
    }
};

// ===== Cardio Workouts =====
const cardioWorkouts = {
    liss: {
        name: 'LISS - Low Intensity Steady State',
        duration: '30-60 minutes',
        heartRate: '120-140 BPM (Zone 2)',
        description: 'Low intensity cardio for fat burning and recovery.',
        options: [
            { activity: 'Walking (incline treadmill)', details: '10-15% incline, 5-6 km/h', duration: '30-45 min' },
            { activity: 'Stationary Bike', details: 'Moderate resistance, steady pace', duration: '40-60 min' },
            { activity: 'Swimming', details: 'Easy laps, focus on technique', duration: '30-45 min' },
            { activity: 'Elliptical', details: 'Low resistance, steady rhythm', duration: '40-50 min' }
        ],
        tips: [
            'You should be able to hold a conversation',
            'Great for active recovery days',
            'Perfect for fat oxidation',
            'Can do fasted for enhanced fat burning'
        ]
    },
    hiit: {
        name: 'HIIT - High Intensity Interval Training',
        duration: '15-25 minutes',
        heartRate: '160-180+ BPM (Zone 4-5)',
        description: 'Maximum effort intervals for conditioning and calorie burn.',
        workout: [
            { phase: 'Warm-up', duration: '3 min', details: 'Light jog or dynamic stretches' },
            { phase: 'Sprint', duration: '30 sec', details: 'Maximum effort (RPE 9-10)' },
            { phase: 'Rest', duration: '60 sec', details: 'Walk or very light jog' },
            { phase: 'Repeat', duration: 'x8-10', details: 'Complete 8-10 rounds' },
            { phase: 'Cool-down', duration: '3 min', details: 'Light walk, stretching' }
        ],
        tips: [
            'True sprints - give 100% effort',
            'Don\'t do more than 2-3x per week',
            'Allow 48 hours recovery between sessions',
            'Can use bike, rower, or running'
        ]
    },
    cycling: {
        name: 'Cycling Workout',
        duration: '30-45 minutes',
        heartRate: '130-160 BPM (Zone 3-4)',
        description: 'Interval cycling for leg endurance and cardio.',
        workout: [
            { phase: 'Warm-up', duration: '5 min', details: 'Easy spinning, low resistance' },
            { phase: 'Moderate Push', duration: '4 min', details: 'Medium resistance, steady cadence' },
            { phase: 'High Intensity', duration: '1 min', details: 'High resistance, max effort' },
            { phase: 'Recovery', duration: '2 min', details: 'Low resistance, easy spin' },
            { phase: 'Repeat', duration: 'x5-6', details: 'Complete 5-6 rounds' },
            { phase: 'Cool-down', duration: '5 min', details: 'Easy spinning, stretch' }
        ],
        tips: [
            'Adjust resistance to maintain cadence 80-100 RPM',
            'Stay seated for power, stand for bursts',
            'Great low-impact option',
            'Builds leg endurance without heavy loads'
        ]
    },
    rowing: {
        name: 'Rowing Workout',
        duration: '20-30 minutes',
        heartRate: '140-170 BPM (Zone 3-4)',
        description: 'Full-body cardio with focus on back and legs.',
        workout: [
            { phase: 'Warm-up', duration: '3 min', details: 'Easy rowing, focus on technique' },
            { phase: 'Steady Row', duration: '5 min', details: '22-24 strokes/min, medium effort' },
            { phase: 'Power Intervals', duration: '1 min', details: '28-30 strokes/min, high effort' },
            { phase: 'Recovery', duration: '1 min', details: '18-20 strokes/min' },
            { phase: 'Repeat', duration: 'x4-6', details: 'Complete 4-6 rounds' },
            { phase: 'Cool-down', duration: '3 min', details: 'Easy row, stretch' }
        ],
        tips: [
            'Drive with legs first (60%), then back (30%), then arms (10%)',
            'Keep core engaged throughout',
            'Don\'t death-grip the handle',
            'Full extension on each stroke'
        ]
    }
};

// ===== Hyrox Workouts =====
const hyroxWorkouts = {
    'race-sim': {
        name: 'Hyrox Race Simulation',
        duration: '60-90 minutes',
        intensity: 'High',
        description: 'Complete Hyrox simulation - all 8 stations with running',
        stations: [
            { name: '1km Run', details: 'Start with 1km run', target: '4:30-5:30' },
            { name: 'SkiErg', details: '1000m', target: '4:00-5:00' },
            { name: '1km Run', details: 'Transition run', target: '4:30-5:30' },
            { name: 'Sled Push', details: '50m (Scale: use heavy sled or prowler)', target: '2:00-3:00' },
            { name: '1km Run', details: 'Transition run', target: '4:30-5:30' },
            { name: 'Sled Pull', details: '50m (Scale: seated cable row 1000m)', target: '2:00-3:00' },
            { name: '1km Run', details: 'Transition run', target: '4:30-5:30' },
            { name: 'Burpee Broad Jumps', details: '80m (Scale: 40 reps)', target: '4:00-6:00' },
            { name: '1km Run', details: 'Transition run', target: '4:30-5:30' },
            { name: 'Rowing', details: '1000m', target: '3:30-4:30' },
            { name: '1km Run', details: 'Transition run', target: '4:30-5:30' },
            { name: 'Farmers Carry', details: '200m (2x24kg)', target: '2:00-3:00' },
            { name: '1km Run', details: 'Transition run', target: '4:30-5:30' },
            { name: 'Sandbag Lunges', details: '100m (20kg bag)', target: '3:00-4:00' },
            { name: '1km Run', details: 'Final run - empty the tank!', target: '4:00-5:00' },
            { name: 'Wall Balls', details: '100 reps (6kg/9kg)', target: '6:00-8:00' }
        ],
        tips: [
            'Pace your runs - don\'t go out too fast',
            'Transition quickly between stations',
            'Practice race nutrition',
            'Do this once every 2-3 weeks'
        ]
    },
    'stations': {
        name: 'Hyrox Station Practice',
        duration: '30-45 minutes',
        intensity: 'Moderate-High',
        description: 'Focus on individual station technique and efficiency',
        workout: [
            { name: 'Warm-up', details: '5 min light cardio + dynamic stretches' },
            { name: 'SkiErg Technique', details: '3 x 250m with 1 min rest', focus: 'Hip drive and arm pull timing' },
            { name: 'Wall Balls', details: '3 x 20 reps with 1 min rest', focus: 'Hip drive, catch rhythm' },
            { name: 'Burpee Broad Jumps', details: '3 x 10 reps with 1 min rest', focus: 'Efficiency of movement' },
            { name: 'Farmers Carry', details: '3 x 50m with 1 min rest', focus: 'Grip endurance, posture' },
            { name: 'Rowing', details: '3 x 250m with 1 min rest', focus: 'Power application, pacing' },
            { name: 'Cool-down', details: '5 min stretching' }
        ],
        tips: [
            'Focus on technique over speed',
            'Note what feels hard - that\'s what to practice more',
            'Video yourself to check form',
            'Rest enough between sets to maintain quality'
        ]
    },
    'endurance': {
        name: 'Hyrox Running Endurance',
        duration: '40-60 minutes',
        intensity: 'Moderate',
        description: 'Build your running base for the 8km of running in Hyrox',
        workout: [
            { name: 'Easy Run', details: '5 min warm-up jog' },
            { name: 'Tempo Intervals', details: '5 x 1km at race pace with 2 min walk recovery' },
            { name: 'Alternative: Long Run', details: '8-10km at conversational pace' },
            { name: 'Cool-down', details: '5 min walk + stretch' }
        ],
        weeklyPlan: [
            { day: 'Monday', workout: '5km easy run' },
            { day: 'Wednesday', workout: 'Tempo intervals (above)' },
            { day: 'Saturday', workout: '8-10km long run' }
        ],
        tips: [
            'Build weekly mileage gradually (10% max increase)',
            'Easy runs should be truly easy',
            'Include 1 harder session per week',
            'Recovery is when fitness improves'
        ]
    },
    'strength': {
        name: 'Hyrox Functional Strength',
        duration: '45 minutes',
        intensity: 'High',
        description: 'Build strength for sled work, carries, and wall balls',
        workout: [
            { name: 'Warm-up', details: '5 min cardio + mobility' },
            { name: 'Goblet Squats', details: '4 x 12', focus: 'Wall ball prep' },
            { name: 'Hip Thrusts', details: '4 x 10', focus: 'Sled push power' },
            { name: 'Seated Cable Rows', details: '4 x 12', focus: 'Sled pull strength' },
            { name: 'Farmers Walk', details: '4 x 40m', focus: 'Grip and core' },
            { name: 'Walking Lunges', details: '3 x 20 steps (weighted)', focus: 'Sandbag lunge prep' },
            { name: 'Medicine Ball Slams', details: '3 x 15', focus: 'Explosive power' },
            { name: 'Plank Hold', details: '3 x 45 sec', focus: 'Core stability' }
        ],
        tips: [
            'Focus on functional movement patterns',
            'Train grip strength specifically',
            'Include single-leg work for balance',
            'Power endurance > max strength for Hyrox'
        ]
    }
};

// ===== Demo User Data =====
const demoUser = {
    email: 'demo@eddytrains.com',
    password: 'demo123',
    name: 'Demo User',
    oneRepMaxes: {
        squat: 120,
        bench: 90,
        deadlift: 150,
        ohp: 55,
        row: 80
    },
    stats: {
        workoutsThisWeek: 4,
        currentStreak: 12,
        totalVolume: 15420
    },
    progressHistory: {
        dates: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        squat: [100, 105, 110, 112, 115, 120],
        bench: [75, 78, 82, 85, 87, 90],
        deadlift: [130, 135, 140, 142, 147, 150]
    },
    photos: []
};
