'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * *
  This file saves an example workout with 15 exercises to an array

  The format of the exercises should be:
  var exercise = {
    name: String,
    description: String,
    type: String (one of the following: cooldown, warmup, exercise)
    picture: String (url of image),
    environment: String (either outdoor or indoor)
    muscleGroup: String
    difficulty: String
  }

* * * * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Warm Up Exercises
* * * * * * * * * * * * * * * * * * * * * * * * * * */

var highKnees = {
  name: 'High Knees',
  description: 'Begin jogging in place, lifting the knees as high as you can. Try to lift your knees up to hip level but keep the core tight to support your back. For a more advanced move, hold your hands straight at hip level and try to touch the knees to your hands as you lift them.Bring the knees towards your hands instead of reaching the hands to the knees!',
  type: 'warmup',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/High_Knees1.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'easy'
};

var catCow = {
  name: 'Cat Cow',
  description: 'Kneel on a mat with your hands and knees shoulder-width apart.Pull your abs in, hunch your back up and flex your spine.Hold the stretch and then release to the starting position.',
  type: 'warmup',
  picture: 'http://dingo.care2.com/pictures/greenliving/uploads/2013/03/Cat-Cow-Poses.jpg',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'easy'
};

var hipCircles = {
  name: 'Hip Circles',
  description: 'Stand tall with your chest up. Move your feet to shoulder-width apart. Place your hands on your hips.Begin the movement by shifting your hips to the left. Bring them forward and to the right in a circular motion. From the right, shift your hips back and to the left.Continue in this circular motion. Stop once to switch directions.',
  type: 'warmup',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Hip_Circles-1.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'easy'

  /* * * * * * * * * * * * * * * * * * * * * * * * * * *
    Workout Exercises
  * * * * * * * * * * * * * * * * * * * * * * * * * * */

};var flutterKicks = {
  name: 'Flutter kicks',
  description: 'Lie on a mat with your hands under your buttocks and raise your legs slightly, keeping knees straight and ankles together.Keep abs engaged and perform short kicks in an alternating fashion.Repeat as needed and then lower legs to the ground.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Flutter_Kicks_M_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var plank = {
  name: 'Plank',
  description: 'Get into a face down position on the floor supporting your upper body on your forearms. Your elbows should be bent at 90 degrees.Extend your legs straight out behind you, supporting them on your toes and balls of your feet.Keep your body in a straight line by tightening your abdominal and oblique muscles.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Plank_F_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var plankKneeToElbow = {
  name: 'Plank Knee to Elbow',
  description: 'Lay face down on the ground with extended legs.Point your toes while you place your hands beneath your shoulders.Push yourself up into the plank position.Maintaining a tight core and flat back, bring your left knee to your right elbow.Pause and slowly return each to the starting point.Repeat with the other side and keep alternating.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Plank_Knee_to_Elbow_F_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var windshieldWipers = {
  name: 'Windshield Wipers',
  description: 'Lie on an exercise mat, keeping your back flat with no arching of the spine.Extend your arms out beside you at shoulder level, with your palms pressed firmly to the floor. Your upper body should form a “T” shape.Raise your feet off the floor by bending your hips and knees to 90 degree angles. This is the start position.As you exhale, rotate both your thighs to one side until the outer thigh touches the ground or until you feel a stretch in your abs and lower back.Pause briefly, then rotate to the other side without pausing in the start position.When you have rotated to both sides, that is one repetition.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Windshield_wipers_M_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var reverseCrunch = {
  name: 'Reverse Crunch',
  description: 'Lie flat on an exercise mat on the floor.Extend your legs fully and place your hands palms down, flat on the floor beside you.Keeping your feet together, draw your knees up towards your chest, until your thighs are at 90 degrees to the floor and your calves are parallel to it. This is the start position.As you inhale, curl your hips up off the floor while bringing your knees further towards your chest.Continue the movement until your knees are touching your chest, or as far as comfortable.Hold for a count of one.In a controlled movement, return your legs to the start position, exhaling as you do so.Repeat.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Reverse_Crunch_F_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var sitUps = {
  name: 'Sit Ups',
  description: 'Lie with knees bent and feet flat on the floor. You can have someone hold your feet or place them under something to keep them steady.Place your hands behind your head, elbows pointing out.Engage your abs and lift your head, neck and shoulders up. Pretend you are holding a small ball under your chin.Hold and then return to starting position.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Sit-up_F_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var standingCrossBodyCrunches = {
  name: 'Standing Cross-Body Crunches',
  description: 'Standing up straight, bring your hands behind your head so that your elbows are pointed to the sides.Twisting your body, bring your left elbow down and across your body. At the same time, raise your right knee up and across to meet the left elbow.Return to the starting position.Repeat on the other side and continue alternating.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Standing_Cross-body_Crunch1.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var bicycleCrunches = {
  name: 'Bicycle Crunches',
  description: 'Lie flat on an exercise mat on the floor keeping your lower back straight with no arching of your spine and with your knees bent and feet flat on the floor.Place your hands lightly on the sides of your head.Curl your torso upwards so your shoulders are slightly raised off the floor..Raise your knees until your thighs are at a right angle to the floor and your calves are parallel to the floor. This is the start position.Slowly move your legs in a pedaling action as if you are riding a bicycle.As you do so, exhale and bring your opposing elbow close to each knee by crunching to one side. Left elbow to right knee. Right elbow to left knee.After each crunch, return to the start position inhaling as you do so.Without pausing, repeat the movement to the other side.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Bicycle_Crunches_Air-Bikes_M_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'
};

var doubleSideJacknifes = {
  name: 'Double Side Jacknifes',
  description: 'Bring yourself to the ground and lie on your left side. Be sure to stack your feet.Place your left hand on your side while raising your right arm above your head so that the elbow is pointing towards the sky.Focusing all of the tension and contraction in the obliques, bring your feet up while you raise your upper body. Lead with the right elbow.Hold the contraction and slowly return to the starting position. Do not allow your feet or shoulder to touch the ground.Repeat.',
  type: 'workout',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Double-Side_Jackknife.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'intermediate'

  /* * * * * * * * * * * * * * * * * * * * * * * * * * *
    Cooldown Exercises
  * * * * * * * * * * * * * * * * * * * * * * * * * * */

};var cobra = {
  name: 'cobra stretch',
  description: 'Lie face down with your hands under your shoulders.Point your feet downwards to lengthen your spine.Slowly push your torso up as far as you comfortably can – try to get your hips to rise off the floor slightly.Hold the stretch and then lower down to starting position.',
  type: 'cooldown',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Cobra_Stretch_M_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'easy'
};

var ragdoll = {
  name: 'Rag Doll',
  description: 'Stand tall with your feet together and arms at your sides.Slowly, bend at the hips while keeping your knees engaged. Allow your upper body to hang over. Let your arms drop as well, dangling in front of you.Once you’re fully bent over and your hands are at your toes, pause and feel the stretch in your hamstrings.',
  type: 'cooldown',
  picture: 'https://www.oxygenmag.com/.image/t_share/MTQ1MzQ3MzE1Njg4Mjg1NzUx/image-placeholder-title.jpg',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'easy'
};

var scorpionStretch = {
  name: 'Scorpion Stretch',
  description: 'Lie face down on a mat or soft surface.Place your hands at your sides for balance.Keeping your shoulders touching the ground, raise the left foot straight up into the air.Bend at the knee and bring your left foot over to your right side. Tap the ground with your toes.Return the left leg to the ground and repeat on the other side.',
  type: 'cooldown',
  picture: 'http://workoutlabs.com/wp-content/uploads/watermarked/Scorpion_M_WorkoutLabs.png',
  environment: 'indoor',
  muscleGroup: 'core',
  difficulty: 'easy'

  /* * * * * * * * * * * * * * * * * * * * * * * * * * *
    Add all the exercises to an array
  * * * * * * * * * * * * * * * * * * * * * * * * * * */

};window.exampleExerciseData = [highKnees, flutterKicks, cobra, catCow, hipCircles, plank, plankKneeToElbow, windshieldWipers, reverseCrunch, sitUps, standingCrossBodyCrunches, bicycleCrunches, doubleSideJacknifes, ragdoll, scorpionStretch];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlRXhlcmNpc2VEYXRhLmpzIl0sIm5hbWVzIjpbImhpZ2hLbmVlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJwaWN0dXJlIiwiZW52aXJvbm1lbnQiLCJtdXNjbGVHcm91cCIsImRpZmZpY3VsdHkiLCJjYXRDb3ciLCJoaXBDaXJjbGVzIiwiZmx1dHRlcktpY2tzIiwicGxhbmsiLCJwbGFua0tuZWVUb0VsYm93Iiwid2luZHNoaWVsZFdpcGVycyIsInJldmVyc2VDcnVuY2giLCJzaXRVcHMiLCJzdGFuZGluZ0Nyb3NzQm9keUNydW5jaGVzIiwiYmljeWNsZUNydW5jaGVzIiwiZG91YmxlU2lkZUphY2tuaWZlcyIsImNvYnJhIiwicmFnZG9sbCIsInNjb3JwaW9uU3RyZXRjaCIsIndpbmRvdyIsImV4YW1wbGVFeGVyY2lzZURhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7QUFJQSxJQUFJQSxZQUFZO0FBQ2RDLFFBQU0sWUFEUTtBQUVkQyxlQUFhLDZWQUZDO0FBR2RDLFFBQU0sUUFIUTtBQUlkQyxXQUFTLHVFQUpLO0FBS2RDLGVBQWEsUUFMQztBQU1kQyxlQUFhLE1BTkM7QUFPZEMsY0FBWTtBQVBFLENBQWhCOztBQVVBLElBQUlDLFNBQVM7QUFDWFAsUUFBTSxTQURLO0FBRVhDLGVBQWEsb0xBRkY7QUFHWEMsUUFBTSxRQUhLO0FBSVhDLFdBQVMsK0VBSkU7QUFLWEMsZUFBYSxRQUxGO0FBTVhDLGVBQWEsTUFORjtBQU9YQyxjQUFZO0FBUEQsQ0FBYjs7QUFVQSxJQUFJRSxhQUFhO0FBQ2ZSLFFBQU0sYUFEUztBQUVmQyxlQUFhLDZVQUZFO0FBR2ZDLFFBQU0sUUFIUztBQUlmQyxXQUFTLHlFQUpNO0FBS2ZDLGVBQWEsUUFMRTtBQU1mQyxlQUFhLE1BTkU7QUFPZkMsY0FBWTs7QUFJZDs7OztBQVhpQixDQUFqQixDQWVBLElBQUlHLGVBQWU7QUFDakJULFFBQU0sZUFEVztB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QXpDLEVBQXNERSxLQUF0RCxFQUE2REMsZ0JBQTdELEVBQStFQyxnQkFBL0UsRUFBaUdDLGFBQWpHLEVBQWdIQyxNQUFoSCxFQUF3SEMseUJBQXhILEVBQW1KQyxlQUFuSixFQUFvS0MsbUJBQXBLLEVBQTBMRSxPQUExTCxFQUFtTUMsZUFBbk0sQ0FBN0IiLCJmaWxlIjoiZXhhbXBsZUV4ZXJjaXNlRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgVGhpcyBmaWxlIHNhdmVzIGFuIGV4YW1wbGUgd29ya291dCB3aXRoIDE1IGV4ZXJjaXNlcyB0byBhbiBhcnJheVxuXG4gIFRoZSBmb3JtYXQgb2YgdGhlIGV4ZXJjaXNlcyBzaG91bGQgYmU6XG4gIHZhciBleGVyY2lzZSA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICB0eXBlOiBTdHJpbmcgKG9uZSBvZiB0aGUgZm9sbG93aW5nOiBjb29sZG93biwgd2FybXVwLCBleGVyY2lzZSlcbiAgICBwaWN0dXJlOiBTdHJpbmcgKHVybCBvZiBpbWFnZSksXG4gICAgZW52aXJvbm1lbnQ6IFN0cmluZyAoZWl0aGVyIG91dGRvb3Igb3IgaW5kb29yKVxuICAgIG11c2NsZUdyb3VwOiBTdHJpbmdcbiAgICBkaWZmaWN1bHR5OiBTdHJpbmdcbiAgfVxuXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFdhcm0gVXAgRXhlcmNpc2VzXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxudmFyIGhpZ2hLbmVlcyA9IHtcbiAgbmFtZTogJ0hpZ2ggS25lZXMnLFxuICBkZXNjcmlwdGlvbjogJ0JlZ2luIGpvZ2dpbmcgaW4gcGxhY2UsIGxpZnRpbmcgdGhlIGtuZWVzIGFzIGhpZ2ggYXMgeW91IGNhbi4gVHJ5IHRvIGxpZnQgeW91ciBrbmVlcyB1cCB0byBoaXAgbGV2ZWwgYnV0IGtlZXAgdGhlIGNvcmUgdGlnaHQgdG8gc3VwcG9ydCB5b3VyIGJhY2suIEZvciBhIG1vcmUgYWR2YW5jZWQgbW92ZSwgaG9sZCB5b3VyIGhhbmRzIHN0cmFpZ2h0IGF0IGhpcCBsZXZlbCBhbmQgdHJ5IHRvIHRvdWNoIHRoZSBrbmVlcyB0byB5b3VyIGhhbmRzIGFzIHlvdSBsaWZ0IHRoZW0uQnJpbmcgdGhlIGtuZWVzIHRvd2FyZHMgeW91ciBoYW5kcyBpbnN0ZWFkIG9mIHJlYWNoaW5nIHRoZSBoYW5kcyB0byB0aGUga25lZXMhJyxcbiAgdHlwZTogJ3dhcm11cCcsXG4gIHBpY3R1cmU6ICdodHRwOi8vd29ya291dGxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy93YXRlcm1hcmtlZC9IaWdoX0tuZWVzMS5wbmcnLFxuICBlbnZpcm9ubWVudDogJ2luZG9vcicsXG4gIG11c2NsZUdyb3VwOiAnY29yZScsXG4gIGRpZmZpY3VsdHk6ICdlYXN5J1xufVxuXG52YXIgY2F0Q293ID0ge1xuICBuYW1lOiAnQ2F0IENvdycsXG4gIGRlc2NyaXB0aW9uOiAnS25lZWwgb24gYSBtYXQgd2l0aCB5b3VyIGhhbmRzIGFuZCBrbmVlcyBzaG91bGRlci13aWR0aCBhcGFydC5QdWxsIHlvdXIgYWJzIGluLCBodW5jaCB5b3VyIGJhY2sgdXAgYW5kIGZsZXggeW91ciBzcGluZS5Ib2xkIHRoZSBzdHJldGNoIGFuZCB0aGVuIHJlbGVhc2UgdG8gdGhlIHN0YXJ0aW5nIHBvc2l0aW9uLicsXG4gIHR5cGU6ICd3YXJtdXAnLFxuICBwaWN0dXJlOiAnaHR0cDovL2RpbmdvLmNhcmUyLmNvbS9waWN0dXJlcy9ncmVlbmxpdmluZy91cGxvYWRzLzIwMTMvMDMvQ2F0LUNvdy1Qb3Nlcy5qcGcnLFxuICBlbnZpcm9ubWVudDogJ2luZG9vcicsXG4gIG11c2NsZUdyb3VwOiAnY29yZScsXG4gIGRpZmZpY3VsdHk6ICdlYXN5J1xufVxuXG52YXIgaGlwQ2lyY2xlcyA9IHtcbiAgbmFtZTogJ0hpcCBDaXJjbGVzJyxcbiAgZGVzY3JpcHRpb246ICdTdGFuZCB0YWxsIHdpdGggeW91ciBjaGVzdCB1cC4gTW92ZSB5b3VyIGZlZXQgdG8gc2hvdWxkZXItd2lkdGggYXBhcnQuIFBsYWNlIHlvdXIgaGFuZHMgb24geW91ciBoaXBzLkJlZ2luIHRoZSBtb3ZlbWVudCBieSBzaGlmdGluZyB5b3VyIGhpcHMgdG8gdGhlIGxlZnQuIEJyaW5nIHRoZW0gZm9yd2FyZCBhbmQgdG8gdGhlIHJpZ2h0IGluIGEgY2lyY3VsYXIgbW90aW9uLiBGcm9tIHRoZSByaWdodCwgc2hpZnQgeW91ciBoaXBzIGJhY2sgYW5kIHRvIHRoZSBsZWZ0LkNvbnRpbnVlIGluIHRoaXMgY2lyY3VsYXIgbW90aW9uLiBTdG9wIG9uY2UgdG8gc3dpdGNoIGRpcmVjdGlvbnMuJyxcbiAgdHlwZTogJ3dhcm11cCcsXG4gIHBpY3R1cmU6ICdodHRwOi8vd29ya291dGxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy93YXRlcm1hcmtlZC9IaXBfQ2lyY2xlcy0xLnBuZycsXG4gIGVudmlyb25tZW50OiAnaW5kb29yJyxcbiAgbXVzY2xlR3JvdXA6ICdjb3JlJyxcbiAgZGlmZmljdWx0eTogJ2Vhc3knXG59XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFdvcmtvdXQgRXhlcmNpc2VzXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxudmFyIGZsdXR0ZXJLaWNrcyA9IHtcbiAgbmFtZTogJ0ZsdXR0ZXIga2lja3MnLFxuICBkZXNjcmlwdGlvbjogJ0xpZSBvbiBhIG1hdCB3aXRoIHlvdXIgaGFuZHMgdW5kZXIgeW91ciBidXR0b2NrcyBhbmQgcmFpc2UgeW91ciBsZWdzIHNsaWdodGx5LCBrZWVwaW5nIGtuZWVzIHN0cmFpZ2h0IGFuZCBhbmtsZXMgdG9nZXRoZXIuS2VlcCBhYnMgZW5nYWdlZCBhbmQgcGVyZm9ybSBzaG9ydCBraWNrcyBpbiBhbiBhbHRlcm5hdGluZyBmYXNoaW9uLlJlcGVhdCBhcyBuZWVkZWQgYW5kIHRoZW4gbG93ZXIgbGVncyB0byB0aGUgZ3JvdW5kLicsXG4gIHR5cGU6ICd3b3Jrb3V0JyxcbiAgcGljdHVyZTogJ2h0dHA6Ly93b3Jrb3V0bGFicy5jb20vd3AtY29udGVudC91cGxvYWRzL3dhdGVybWFya2VkL0ZsdXR0ZXJfS2lja3NfTV9Xb3Jrb3V0TGFicy5wbmcnLFxuICBlbnZpcm9ubWVudDogJ2luZG9vcicsXG4gIG11c2NsZUdyb3VwOiAnY29yZScsXG4gIGRpZmZpY3VsdHk6ICdpbnRlcm1lZGlhdGUnXG59XG5cbnZhciBwbGFuayA9IHtcbiAgbmFtZTogJ1BsYW5rJyxcbiAgZGVzY3JpcHRpb246ICdHZXQgaW50byBhIGZhY2UgZG93biBwb3NpdGlvbiBvbiB0aGUgZmxvb3Igc3VwcG9ydGluZyB5b3VyIHVwcGVyIGJvZHkgb24geW91ciBmb3JlYXJtcy4gWW91ciBlbGJvd3Mgc2hvdWxkIGJlIGJlbnQgYXQgOTAgZGVncmVlcy5FeHRlbmQgeW91ciBsZWdzIHN0cmFpZ2h0IG91dCBiZWhpbmQgeW91LCBzdXBwb3J0aW5nIHRoZW0gb24geW91ciB0b2VzIGFuZCBiYWxscyBvZiB5b3VyIGZlZXQuS2VlcCB5b3VyIGJvZHkgaW4gYSBzdHJhaWdodCBsaW5lIGJ5IHRpZ2h0ZW5pbmcgeW91ciBhYmRvbWluYWwgYW5kIG9ibGlxdWUgbXVzY2xlcy4nLFxuICB0eXBlOiAnd29ya291dCcsXG4gIHBpY3R1cmU6ICdodHRwOi8vd29ya291dGxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy93YXRlcm1hcmtlZC9QbGFua19GX1dvcmtvdXRMYWJzLnBuZycsXG4gIGVudmlyb25tZW50OiAnaW5kb29yJyxcbiAgbXVzY2xlR3JvdXA6ICdjb3JlJyxcbiAgZGlmZmljdWx0eTogJ2ludGVybWVkaWF0ZSdcbn1cblxudmFyIHBsYW5rS25lZVRvRWxib3cgPSB7XG4gIG5hbWU6ICdQbGFuayBLbmVlIHRvIEVsYm93JyxcbiAgZGVzY3JpcHRpb246ICdMYXkgZmFjZSBkb3duIG9uIHRoZSBncm91bmQgd2l0aCBleHRlbmRlZCBsZWdzLlBvaW50IHlvdXIgdG9lcyB3aGlsZSB5b3UgcGxhY2UgeW91ciBoYW5kcyBiZW5lYXRoIHlvdXIgc2hvdWxkZXJzLlB1c2ggeW91cnNlbGYgdXAgaW50byB0aGUgcGxhbmsgcG9zaXRpb24uTWFpbnRhaW5pbmcgYSB0aWdodCBjb3JlIGFuZCBmbGF0IGJhY2ssIGJyaW5nIHlvdXIgbGVmdCBrbmVlIHRvIHlvdXIgcmlnaHQgZWxib3cuUGF1c2UgYW5kIHNsb3dseSByZXR1cm4gZWFjaCB0byB0aGUgc3RhcnRpbmcgcG9pbnQuUmVwZWF0IHdpdGggdGhlIG90aGVyIHNpZGUgYW5kIGtlZXAgYWx0ZXJuYXRpbmcuJyxcbiAgdHlwZTogJ3dvcmtvdXQnLFxuICBwaWN0dXJlOiAnaHR0cDovL3dvcmtvdXRsYWJzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvd2F0ZXJtYXJrZWQvUGxhbmtfS25lZV90b19FbGJvd19GX1dvcmtvdXRMYWJzLnBuZycsXG4gIGVudmlyb25tZW50OiAnaW5kb29yJyxcbiAgbXVzY2xlR3JvdXA6ICdjb3JlJyxcbiAgZGlmZmljdWx0eTogJ2ludGVybWVkaWF0ZSdcbn1cblxudmFyIHdpbmRzaGllbGRXaXBlcnMgPSB7XG4gIG5hbWU6ICdXaW5kc2hpZWxkIFdpcGVycycsXG4gIGRlc2NyaXB0aW9uOiAnTGllIG9uIGFuIGV4ZXJjaXNlIG1hdCwga2VlcGluZyB5b3VyIGJhY2sgZmxhdCB3aXRoIG5vIGFyY2hpbmcgb2YgdGhlIHNwaW5lLkV4dGVuZCB5b3VyIGFybXMgb3V0IGJlc2lkZSB5b3UgYXQgc2hvdWxkZXIgbGV2ZWwsIHdpdGggeW91ciBwYWxtcyBwcmVzc2VkIGZpcm1seSB0byB0aGUgZmxvb3IuIFlvdXIgdXBwZXIgYm9keSBzaG91bGQgZm9ybSBhIOKAnFTigJ0gc2hhcGUuUmFpc2UgeW91ciBmZWV0IG9mZiB0aGUgZmxvb3IgYnkgYmVuZGluZyB5b3VyIGhpcHMgYW5kIGtuZWVzIHRvIDkwIGRlZ3JlZSBhbmdsZXMuIFRoaXMgaXMgdGhlIHN0YXJ0IHBvc2l0aW9uLkFzIHlvdSBleGhhbGUsIHJvdGF0ZSBib3RoIHlvdXIgdGhpZ2hzIHRvIG9uZSBzaWRlIHVudGlsIHRoZSBvdXRlciB0aGlnaCB0b3VjaGVzIHRoZSBncm91bmQgb3IgdW50aWwgeW91IGZlZWwgYSBzdHJldGNoIGluIHlvdXIgYWJzIGFuZCBsb3dlciBiYWNrLlBhdXNlIGJyaWVmbHksIHRoZW4gcm90YXRlIHRvIHRoZSBvdGhlciBzaWRlIHdpdGhvdXQgcGF1c2luZyBpbiB0aGUgc3RhcnQgcG9zaXRpb24uV2hlbiB5b3UgaGF2ZSByb3RhdGVkIHRvIGJvdGggc2lkZXMsIHRoYXQgaXMgb25lIHJlcGV0aXRpb24uJyxcbiAgdHlwZTogJ3dvcmtvdXQnLFxuICBwaWN0dXJlOiAnaHR0cDovL3dvcmtvdXRsYWJzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvd2F0ZXJtYXJrZWQvV2luZHNoaWVsZF93aXBlcnNfTV9Xb3Jrb3V0TGFicy5wbmcnLFxuICBlbnZpcm9ubWVudDogJ2luZG9vcicsXG4gIG11c2NsZUdyb3VwOiAnY29yZScsXG4gIGRpZmZpY3VsdHk6ICdpbnRlcm1lZGlhdGUnXG59XG5cbnZhciByZXZlcnNlQ3J1bmNoID0ge1xuICBuYW1lOiAnUmV2ZXJzZSBDcnVuY2gnLFxuICBkZXNjcmlwdGlvbjogJ0xpZSBmbGF0IG9uIGFuIGV4ZXJjaXNlIG1hdCBvbiB0aGUgZmxvb3IuRXh0ZW5kIHlvdXIgbGVncyBmdWxseSBhbmQgcGxhY2UgeW91ciBoYW5kcyBwYWxtcyBkb3duLCBmbGF0IG9uIHRoZSBmbG9vciBiZXNpZGUgeW91LktlZXBpbmcgeW91ciBmZWV0IHRvZ2V0aGVyLCBkcmF3IHlvdXIga25lZXMgdXAgdG93YXJkcyB5b3VyIGNoZXN0LCB1bnRpbCB5b3VyIHRoaWdocyBhcmUgYXQgOTAgZGVncmVlcyB0byB0aGUgZmxvb3IgYW5kIHlvdXIgY2FsdmVzIGFyZSBwYXJhbGxlbCB0byBpdC4gVGhpcyBpcyB0aGUgc3RhcnQgcG9zaXRpb24uQXMgeW91IGluaGFsZSwgY3VybCB5b3VyIGhpcHMgdXAgb2ZmIHRoZSBmbG9vciB3aGlsZSBicmluZ2luZyB5b3VyIGtuZWVzIGZ1cnRoZXIgdG93YXJkcyB5b3VyIGNoZXN0LkNvbnRpbnVlIHRoZSBtb3ZlbWVudCB1bnRpbCB5b3VyIGtuZWVzIGFyZSB0b3VjaGluZyB5b3VyIGNoZXN0LCBvciBhcyBmYXIgYXMgY29tZm9ydGFibGUuSG9sZCBmb3IgYSBjb3VudCBvZiBvbmUuSW4gYSBjb250cm9sbGVkIG1vdmVtZW50LCByZXR1cm4geW91ciBsZWdzIHRvIHRoZSBzdGFydCBwb3NpdGlvbiwgZXhoYWxpbmcgYXMgeW91IGRvIHNvLlJlcGVhdC4nLFxuICB0eXBlOiAnd29ya291dCcsXG4gIHBpY3R1cmU6ICdodHRwOi8vd29ya291dGxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy93YXRlcm1hcmtlZC9SZXZlcnNlX0NydW5jaF9GX1dvcmtvdXRMYWJzLnBuZycsXG4gIGVudmlyb25tZW50OiAnaW5kb29yJyxcbiAgbXVzY2xlR3JvdXA6ICdjb3JlJyxcbiAgZGlmZmljdWx0eTogJ2ludGVybWVkaWF0ZSdcbn1cblxudmFyIHNpdFVwcyA9IHtcbiAgbmFtZTogJ1NpdCBVcHMnLFxuICBkZXNjcmlwdGlvbjogJ0xpZSB3aXRoIGtuZWVzIGJlbnQgYW5kIGZlZXQgZmxhdCBvbiB0aGUgZmxvb3IuIFlvdSBjYW4gaGF2ZSBzb21lb25lIGhvbGQgeW91ciBmZWV0IG9yIHBsYWNlIHRoZW0gdW5kZXIgc29tZXRoaW5nIHRvIGtlZXAgdGhlbSBzdGVhZHkuUGxhY2UgeW91ciBoYW5kcyBiZWhpbmQgeW91ciBoZWFkLCBlbGJvd3MgcG9pbnRpbmcgb3V0LkVuZ2FnZSB5b3VyIGFicyBhbmQgbGlmdCB5b3VyIGhlYWQsIG5lY2sgYW5kIHNob3VsZGVycyB1cC4gUHJldGVuZCB5b3UgYXJlIGhvbGRpbmcgYSBzbWFsbCBiYWxsIHVuZGVyIHlvdXIgY2hpbi5Ib2xkIGFuZCB0aGVuIHJldHVybiB0byBzdGFydGluZyBwb3NpdGlvbi4nLFxuICB0eXBlOiAnd29ya291dCcsXG4gIHBpY3R1cmU6ICdodHRwOi8vd29ya291dGxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy93YXRlcm1hcmtlZC9TaXQtdXBfRl9Xb3Jrb3V0TGFicy5wbmcnLFxuICBlbnZpcm9ubWVudDogJ2luZG9vcicsXG4gIG11c2NsZUdyb3VwOiAnY29yZScsXG4gIGRpZmZpY3VsdHk6ICdpbnRlcm1lZGlhdGUnXG59XG5cbnZhciBzdGFuZGluZ0Nyb3NzQm9keUNydW5jaGVzID0ge1xuICBuYW1lOiAnU3RhbmRpbmcgQ3Jvc3MtQm9keSBDcnVuY2hlcycsXG4gIGRlc2NyaXB0aW9uOiAnU3RhbmRpbmcgdXAgc3RyYWlnaHQsIGJyaW5nIHlvdXIgaGFuZHMgYmVoaW5kIHlvdXIgaGVhZCBzbyB0aGF0IHlvdXIgZWxib3dzIGFyZSBwb2ludGVkIHRvIHRoZSBzaWRlcy5Ud2lzdGluZyB5b3VyIGJvZHksIGJyaW5nIHlvdXIgbGVmdCBlbGJvdyBkb3duIGFuZCBhY3Jvc3MgeW91ciBib2R5LiBBdCB0aGUgc2FtZSB0aW1lLCByYWlzZSB5b3VyIHJpZ2h0IGtuZWUgdXAgYW5kIGFjcm9zcyB0byBtZWV0IHRoZSBsZWZ0IGVsYm93LlJldHVybiB0byB0aGUgc3RhcnRpbmcgcG9zaXRpb24uUmVwZWF0IG9uIHRoZSBvdGhlciBzaWRlIGFuZCBjb250aW51ZSBhbHRlcm5hdGluZy4nLFxuICB0eXBlOiAnd29ya291dCcsXG4gIHBpY3R1cmU6ICdodHRwOi8vd29ya291dGxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy93YXRlcm1hcmtlZC9TdGFuZGluZ19Dcm9zcy1ib2R5X0NydW5jaDEucG5nJyxcbiAgZW52aXJvbm1lbnQ6ICdpbmRvb3InLFxuICBtdXNjbGVHcm91cDogJ2NvcmUnLFxuICBkaWZmaWN1bHR5OiAnaW50ZXJtZWRpYXRlJ1xufVxuXG52YXIgYmljeWNsZUNydW5jaGVzID0ge1xuICBuYW1lOiAnQmljeWNsZSBDcnVuY2hlcycsXG4gIGRlc2NyaXB0aW9uOiAnTGllIGZsYXQgb24gYW4gZXhlcmNpc2UgbWF0IG9uIHRoZSBmbG9vciBrZWVwaW5nIHlvdXIgbG93ZXIgYmFjayBzdHJhaWdodCB3aXRoIG5vIGFyY2hpbmcgb2YgeW91ciBzcGluZSBhbmQgd2l0aCB5b3VyIGtuZWVzIGJlbnQgYW5kIGZlZXQgZmxhdCBvbiB0aGUgZmxvb3IuUGxhY2UgeW91ciBoYW5kcyBsaWdodGx5IG9uIHRoZSBzaWRlcyBvZiB5b3VyIGhlYWQuQ3VybCB5b3VyIHRvcnNvIHVwd2FyZHMgc28geW91ciBzaG91bGRlcnMgYXJlIHNsaWdodGx5IHJhaXNlZCBvZmYgdGhlIGZsb29yLi5SYWlzZSB5b3VyIGtuZWVzIHVudGlsIHlvdXIgdGhpZ2hzIGFyZSBhdCBhIHJpZ2h0IGFuZ2xlIHRvIHRoZSBmbG9vciBhbmQgeW91ciBjYWx2ZXMgYXJlIHBhcmFsbGVsIHRvIHRoZSBmbG9vci4gVGhpcyBpcyB0aGUgc3RhcnQgcG9zaXRpb24uU2xvd2x5IG1vdmUgeW91ciBsZWdzIGluIGEgcGVkYWxpbmcgYWN0aW9uIGFzIGlmIHlvdSBhcmUgcmlkaW5nIGEgYmljeWNsZS5BcyB5b3UgZG8gc28sIGV4aGFsZSBhbmQgYnJpbmcgeW91ciBvcHBvc2luZyBlbGJvdyBjbG9zZSB0byBlYWNoIGtuZWUgYnkgY3J1bmNoaW5nIHRvIG9uZSBzaWRlLiBMZWZ0IGVsYm93IHRvIHJpZ2h0IGtuZWUuIFJpZ2h0IGVsYm93IHRvIGxlZnQga25lZS5BZnRlciBlYWNoIGNydW5jaCwgcmV0dXJuIHRvIHRoZSBzdGFydCBwb3NpdGlvbiBpbmhhbGluZyBhcyB5b3UgZG8gc28uV2l0aG91dCBwYXVzaW5nLCByZXBlYXQgdGhlIG1vdmVtZW50IHRvIHRoZSBvdGhlciBzaWRlLicsXG4gIHR5cGU6ICd3b3Jrb3V0JyxcbiAgcGljdHVyZTogJ2h0dHA6Ly93b3Jrb3V0bGFicy5jb20vd3AtY29udGVudC91cGxvYWRzL3dhdGVybWFya2VkL0JpY3ljbGVfQ3J1bmNoZXNfQWlyLUJpa2VzX01fV29ya291dExhYnMucG5nJyxcbiAgZW52aXJvbm1lbnQ6ICdpbmRvb3InLFxuICBtdXNjbGVHcm91cDogJ2NvcmUnLFxuICBkaWZmaWN1bHR5OiAnaW50ZXJtZWRpYXRlJ1xufVxuXG52YXIgZG91YmxlU2lkZUphY2tuaWZlcyA9IHtcbiAgbmFtZTogJ0RvdWJsZSBTaWRlIEphY2tuaWZlcycsXG4gIGRlc2NyaXB0aW9uOiAnQnJpbmcgeW91cnNlbGYgdG8gdGhlIGdyb3VuZCBhbmQgbGllIG9uIHlvdXIgbGVmdCBzaWRlLiBCZSBzdXJlIHRvIHN0YWNrIHlvdXIgZmVldC5QbGFjZSB5b3VyIGxlZnQgaGFuZCBvbiB5b3VyIHNpZGUgd2hpbGUgcmFpc2luZyB5b3VyIHJpZ2h0IGFybSBhYm92ZSB5b3VyIGhlYWQgc28gdGhhdCB0aGUgZWxib3cgaXMgcG9pbnRpbmcgdG93YXJkcyB0aGUgc2t5LkZvY3VzaW5nIGFsbCBvZiB0aGUgdGVuc2lvbiBhbmQgY29udHJhY3Rpb24gaW4gdGhlIG9ibGlxdWVzLCBicmluZyB5b3VyIGZlZXQgdXAgd2hpbGUgeW91IHJhaXNlIHlvdXIgdXBwZXIgYm9keS4gTGVhZCB3aXRoIHRoZSByaWdodCBlbGJvdy5Ib2xkIHRoZSBjb250cmFjdGlvbiBhbmQgc2xvd2x5IHJldHVybiB0byB0aGUgc3RhcnRpbmcgcG9zaXRpb24uIERvIG5vdCBhbGxvdyB5b3VyIGZlZXQgb3Igc2hvdWxkZXIgdG8gdG91Y2ggdGhlIGdyb3VuZC5SZXBlYXQuJyxcbiAgdHlwZTogJ3dvcmtvdXQnLFxuICBwaWN0dXJlOiAnaHR0cDovL3dvcmtvdXRsYWJzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvd2F0ZXJtYXJrZWQvRG91YmxlLVNpZGVfSmFja2tuaWZlLnBuZycsXG4gIGVudmlyb25tZW50OiAnaW5kb29yJyxcbiAgbXVzY2xlR3JvdXA6ICdjb3JlJyxcbiAgZGlmZmljdWx0eTogJ2ludGVybWVkaWF0ZSdcbn1cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIENvb2xkb3duIEV4ZXJjaXNlc1xuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbnZhciBjb2JyYSA9IHtcbiAgbmFtZTogJ2NvYnJhIHN0cmV0Y2gnLFxuICBkZXNjcmlwdGlvbjogJ0xpZSBmYWNlIGRvd24gd2l0aCB5b3VyIGhhbmRzIHVuZGVyIHlvdXIgc2hvdWxkZXJzLlBvaW50IHlvdXIgZmVldCBkb3dud2FyZHMgdG8gbGVuZ3RoZW4geW91ciBzcGluZS5TbG93bHkgcHVzaCB5b3VyIHRvcnNvIHVwIGFzIGZhciBhcyB5b3UgY29tZm9ydGFibHkgY2FuIOKAkyB0cnkgdG8gZ2V0IHlvdXIgaGlwcyB0byByaXNlIG9mZiB0aGUgZmxvb3Igc2xpZ2h0bHkuSG9sZCB0aGUgc3RyZXRjaCBhbmQgdGhlbiBsb3dlciBkb3duIHRvIHN0YXJ0aW5nIHBvc2l0aW9uLicsXG4gIHR5cGU6ICdjb29sZG93bicsXG4gIHBpY3R1cmU6ICdodHRwOi8vd29ya291dGxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy93YXRlcm1hcmtlZC9Db2JyYV9TdHJldGNoX01fV29ya291dExhYnMucG5nJyxcbiAgZW52aXJvbm1lbnQ6ICdpbmRvb3InLFxuICBtdXNjbGVHcm91cDogJ2NvcmUnLFxuICBkaWZmaWN1bHR5OiAnZWFzeSdcbn1cblxudmFyIHJhZ2RvbGwgPSB7XG4gIG5hbWU6ICdSYWcgRG9sbCcsXG4gIGRlc2NyaXB0aW9uOiAnU3RhbmQgdGFsbCB3aXRoIHlvdXIgZmVldCB0b2dldGhlciBhbmQgYXJtcyBhdCB5b3VyIHNpZGVzLlNsb3dseSwgYmVuZCBhdCB0aGUgaGlwcyB3aGlsZSBrZWVwaW5nIHlvdXIga25lZXMgZW5nYWdlZC4gQWxsb3cgeW91ciB1cHBlciBib2R5IHRvIGhhbmcgb3Zlci4gTGV0IHlvdXIgYXJtcyBkcm9wIGFzIHdlbGwsIGRhbmdsaW5nIGluIGZyb250IG9mIHlvdS5PbmNlIHlvdeKAmXJlIGZ1bGx5IGJlbnQgb3ZlciBhbmQgeW91ciBoYW5kcyBhcmUgYXQgeW91ciB0b2VzLCBwYXVzZSBhbmQgZmVlbCB0aGUgc3RyZXRjaCBpbiB5b3VyIGhhbXN0cmluZ3MuJyxcbiAgdHlwZTogJ2Nvb2xkb3duJyxcbiAgcGljdHVyZTogJ2h0dHBzOi8vd3d3Lm94eWdlbm1hZy5jb20vLmltYWdlL3Rfc2hhcmUvTVRRMU16UTNNekUxTmpnNE1qZzFOelV4L2ltYWdlLXBsYWNlaG9sZGVyLXRpdGxlLmpwZycsXG4gIGVudmlyb25tZW50OiAnaW5kb29yJyxcbiAgbXVzY2xlR3JvdXA6ICdjb3JlJyxcbiAgZGlmZmljdWx0eTogJ2Vhc3knXG59XG5cbnZhciBzY29ycGlvblN0cmV0Y2ggPSB7XG4gIG5hbWU6ICdTY29ycGlvbiBTdHJldGNoJyxcbiAgZGVzY3JpcHRpb246ICdMaWUgZmFjZSBkb3duIG9uIGEgbWF0IG9yIHNvZnQgc3VyZmFjZS5QbGFjZSB5b3VyIGhhbmRzIGF0IHlvdXIgc2lkZXMgZm9yIGJhbGFuY2UuS2VlcGluZyB5b3VyIHNob3VsZGVycyB0b3VjaGluZyB0aGUgZ3JvdW5kLCByYWlzZSB0aGUgbGVmdCBmb290IHN0cmFpZ2h0IHVwIGludG8gdGhlIGFpci5CZW5kIGF0IHRoZSBrbmVlIGFuZCBicmluZyB5b3VyIGxlZnQgZm9vdCBvdmVyIHRvIHlvdXIgcmlnaHQgc2lkZS4gVGFwIHRoZSBncm91bmQgd2l0aCB5b3VyIHRvZXMuUmV0dXJuIHRoZSBsZWZ0IGxlZyB0byB0aGUgZ3JvdW5kIGFuZCByZXBlYXQgb24gdGhlIG90aGVyIHNpZGUuJyxcbiAgdHlwZTogJ2Nvb2xkb3duJyxcbiAgcGljdHVyZTogJ2h0dHA6Ly93b3Jrb3V0bGFicy5jb20vd3AtY29udGVudC91cGxvYWRzL3dhdGVybWFya2VkL1Njb3JwaW9uX01fV29ya291dExhYnMucG5nJyxcbiAgZW52aXJvbm1lbnQ6ICdpbmRvb3InLFxuICBtdXNjbGVHcm91cDogJ2NvcmUnLFxuICBkaWZmaWN1bHR5OiAnZWFzeSdcbn1cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIEFkZCBhbGwgdGhlIGV4ZXJjaXNlcyB0byBhbiBhcnJheVxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbndpbmRvdy5leGFtcGxlRXhlcmNpc2VEYXRhID0gW2hpZ2hLbmVlcywgZmx1dHRlcktpY2tzLCBjb2JyYSwgY2F0Q293LCBoaXBDaXJjbGVzLCAgcGxhbmssIHBsYW5rS25lZVRvRWxib3csIHdpbmRzaGllbGRXaXBlcnMsIHJldmVyc2VDcnVuY2gsIHNpdFVwcywgc3RhbmRpbmdDcm9zc0JvZHlDcnVuY2hlcywgYmljeWNsZUNydW5jaGVzLCBkb3VibGVTaWRlSmFja25pZmVzLCAgcmFnZG9sbCwgc2NvcnBpb25TdHJldGNoXTsiXX0=