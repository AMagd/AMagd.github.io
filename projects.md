---
layout: page
title:  "Selected Projects"
subtitle: "many other projects are not included in here and were not documented"
date:   2016-05-20 21:21:21 +0530
categories: ["general"]
---

## [2022] Deep Learning: Lane Segmentation
segmenting different types of road lanes, each one has it's own color as shown below

<p align="center">
<img src="{{ '/assets/project_media/lane_seg.gif' | prepend: site.baseurl }}" class="center" />
</p>

## [2021] Convex Optimization: UAV Path Planning with Obstacle Avoidance
The light blue circles represent the position of the UAV at each step, while the red and green polytopes represent the obstacles and free areas respectively. The green polytopes were created to guide the UAV into knowing that these places are free spaces, and to solve the problem in a particular convex optimization technique. [[Report]][Report] [[Code]][Code1]

[Report]: /assets/project_media/path_planning.pdf
[Code1]:   https://github.com/AMagd/Path_Planning_Optimization

<p align="center">
<img src="{{ '/assets/project_media/path_planning.png' | prepend: site.baseurl }}" style="width:500px;" class="center" />
</p>

## [2020] Computer Vision: UAV Localization
Proposing a design for a UAV's landing station that can replace ArUco markers in harsh weather conditions. Then implementing an algorithm that uses this design to localize the UAV in 3D (with different precisions depending on the amount of occlusion on the station)

<p align="center">
<img src="{{ '/assets/project_media/uav_localization.gif' | prepend: site.baseurl }}" class="center" />
</p>

## [2020] Robotics: KUKA 6 DOF Inverse Kinematics with Simulation
Solving the inverse kinematics of a 6 DOF KUKA manipulator for all possible solutions (in this case we have 8 different solutions in most of the configurations). Then simulating the manipulators' movement. [[Videos]][KUKA-Videos] [[Code]][Code1]

[KUKA-Videos]: https://youtube.com/playlist?list=PL9nxOfGsvMusy76Hr64nVc0glB2h7BjB4
[Code1]: https://github.com/AMagd/KUKA-6-DoF-Inverse-Kinematics

<p align="center">
<img src="{{ '/assets/project_media/kuka_allconfigs.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
<img src="{{ '/assets/project_media/kuka_move.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
</p>

---

<p style="text-align: center;"><font size="5"> Selected Undergraduate Projects </font></p>

## [2019] Human Pose Estimation
I have used Kinect sensor that outputs both, depth and RGB images of the given scene. Then I fused ROS with LabVIEW to estimate participants' body joints locations. In addition, I have created a user interface to measure the pose estimation in real time and to send it to other modules used to control other actuators in the system. The video below, shows the estimated angle of the right elbow in real-time.

<p align="center">
<img src="{{ '/assets/project_media/kinect.gif' | prepend: site.baseurl }}" class="center" />
</p>

## [2019] Playing Around: Using Linear Algebra for Simulations
I had free time during my undergraduate days, so I tried to play around and simulate the movements of a parallel manipulator (in this case it was Stewart Platform). And this was before learning about robot kinematics, it was purely based on linear algebra knowledge.

<p align="center">
<img src="{{ '/assets/project_media/stewart1.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
<img src="{{ '/assets/project_media/stewart2.gif' | prepend: site.baseurl }}" style="width:300px;" class="center" />
</p>
