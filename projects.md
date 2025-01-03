---
layout: page
title:  "Projects"
title1:  "Projects"
subtitle: "many other projects are not included in here and were not documented"
date:   2016-05-20 21:21:21 +0530
categories: ["general"]
---

## [2023] Deep RL: BLAST Implementation
In this work I tried to reproduce the results published by the paper "BLAST: Latent Dynamics Models from Bootstrapping", a model-based RL algorithm based on DreamerV2.

<!-- use "jekyll serve" command to view the page -->
Random policy on different environment modifications of MiniGrid-Dynamic-Obstacles-6x6-v0 (Unmodified, Smaller Agent, Color Direction, Random BG Frames, Video BG):
<p align="center">
<img src="{{ '/assets/project_media/BLAST/unmodified.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/small_agent.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/color_direction.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/random_frames.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/video.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
</p>

Trained DreamerV2 agents:
<p align="center">
<img src="{{ '/assets/project_media/BLAST/unmodified_dv2.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/smaller_agent_dv2.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/color_direction_dv2.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/random_frames_dv2.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/video_dv2.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
</p>

Trained BLAST agents:
<p align="center">
<img src="{{ '/assets/project_media/BLAST/unmodified_ar.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/smaller_agent_ar.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/color_direction_ar.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/random_frames_ar.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
<img src="{{ '/assets/project_media/BLAST/video_ar.gif' | prepend: site.baseurl }}" style="width:100px;" class="center" />
</p>

## [2023] Diffusion Models for HD Mapping
This is my MS graduation project, where I am trying to use diffusion models to create a high definition (HD) map of the environment surrounding the ego-vehicle. The map is created by using 6 surrounding camera images and feeding them to a diffusion model made specifically fascilated taking these perspective-view camera images and transforming them into a BEV HD map image. [[Report]][Report1]

[Report1]: https://drive.google.com/file/d/1I50CE83l0ewW_6LKELM1uTsw-2VS6Ypn/view?usp=sharing

<!-- use "jekyll serve" command to view the page -->
The architecture I created of the diffusion model:
<p align="center">
<img src="{{ '/assets/project_media/Thesis/architecture.png' | prepend: site.baseurl }}" style="width:300px;" class="center" />
</p>
Qualitative Results:
<p align="center">
<img src="{{ '/assets/project_media/Thesis/input_output.png' | prepend: site.baseurl }}" style="width:300px;" class="center" />
</p>
<p align="center">
<img src="{{ '/assets/project_media/Thesis/diff_cropped.gif' | prepend: site.baseurl }}" style="width:500px;" class="center" />
</p>

## [2022] Deep Learning: Lane Segmentation
I have applied deep learning to a wide range of applications especially in computer vision, and the lane segemnation is just one of them. Here I am segmenting different types of road lanes, each one has it's own color as shown below

<p align="center">
<img src="{{ '/assets/project_media/lane_seg.gif' | prepend: site.baseurl }}" style="width:450px;" class="center" />
</p>

## [2021] Convex Optimization: UAV Path Planning with Obstacle Avoidance
The light blue circles represent the position of the UAV at each step, while the red and green polytopes represent the obstacles and free areas respectively. The green polytopes were created to guide the UAV into knowing that these places are free spaces, and to solve the problem in a particular convex optimization technique. [[Report]][Report] [[Code]][Code1]

[Report]: /assets/project_media/path_planning.pdf
[Code1]:   https://github.com/AMagd/Path_Planning_Optimization

<p align="center">
<img src="{{ '/assets/project_media/path_planning.png' | prepend: site.baseurl }}" style="width:450px;" style="width:500px;" class="center" />
</p>

## [2020] Computer Vision: UAV Localization
Proposing a design for a UAV's landing station that can replace ArUco markers in harsh weather conditions. Then implementing an algorithm that uses this design to localize the UAV in 3D (with different precisions depending on the amount of occlusion on the station)

<p align="center">
<img src="{{ '/assets/project_media/uav_localization.gif' | prepend: site.baseurl }}" style="width:450px;" class="center" />
</p>

## [2020] Robotics: KUKA 6 DOF Inverse Kinematics with Simulation
Solving the inverse kinematics of a 6 DOF KUKA manipulator for all possible solutions (in this case we have 8 different solutions in most of the configurations). Then simulating the manipulators' movement. [[Videos]][KUKA-Videos] [[Code]][Code2]

[KUKA-Videos]: https://youtube.com/playlist?list=PL9nxOfGsvMusy76Hr64nVc0glB2h7BjB4
[Code2]: https://github.com/AMagd/KUKA-6-DoF-Inverse-Kinematics

<p align="center">
<img src="{{ '/assets/project_media/kuka_allconfigs.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
<img src="{{ '/assets/project_media/kuka_move.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
</p>

---

<p style="text-align: center;"><font size="5"> Selected Undergraduate Projects </font></p>

## [2019] Human Pose Estimation
I have used Kinect sensor that outputs both, depth and RGB images of the given scene. Then I fused ROS with LabVIEW to estimate participants' body joints locations. In addition, I have created a user interface to measure the pose estimation in real time and to send it to other modules used to control other actuators in the system. The video below, shows the estimated angle of the right elbow in real-time.

<p align="center">
<img src="{{ '/assets/project_media/kinect.gif' | prepend: site.baseurl }}" style="width:450px;" class="center" />
</p>

## [2019] Playing Around: Using Linear Algebra for Simulations
I had free time during my undergraduate days, so I tried to play around and simulate the movements of a parallel manipulator (in this case it was Stewart Platform). And this was before learning about robot kinematics, it was purely based on linear algebra knowledge.

<p align="center">
<img src="{{ '/assets/project_media/stewart1.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
<img src="{{ '/assets/project_media/stewart2.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
</p>

## [2019] Building a 6DOF Robotic Arm
Along with my teammates, we built a 6DOF robotic arm **entirely from scratch**, with most of the parts being 3D printed while the others are made of acrylic. This was during a program organized by Nile University and Erasmus+ (VETEng program) , that aims to group mechatronics engineering students with vocational students in several projects.

<p align="center">
<img src="{{ '/assets/project_media/6dof.gif' | prepend: site.baseurl }}" style="width:450px;" class="center" />
</p>

## [2018] Automatic Vacuum Cleaner
In an effort to build a simple automatic vacuum cleaner, me and my teammates, we built a small robot that uses omniwheels, for a better DOM during indoor Environments. We also used ultrasonic sensors for obstacle avoidance purposes. [[Video]][OMNI-Video]

[OMNI-Video]: https://www.youtube.com/watch?v=p35AV2-RIWU

<p align="center">
<img src="{{ '/assets/project_media/omni.gif' | prepend: site.baseurl }}" style="width:450px;" class="center" />
</p>
