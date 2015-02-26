---
title: GitHub Workflow
date: 2013-09-20
author:
  name: Truong Nguyen
  github: constantx
  avatar: http://i.imgur.com/mDTn6eC.jpg
---

1. when a story is estimated and started, a PR is opened (with `wip` label)
2. when a PR is done, `wip` label is removed from the PR
3. story is marked as `finish` in PT, and ping a code reviewer to review the PR
4. once the PR is reviewed, it’s merged to production by the code review, and he/she marks the story as `deliver` in PT
5. the story’s requester then QA the deliverable if there’s any (on the product/visual/design/functionality side) and `accept/reject
