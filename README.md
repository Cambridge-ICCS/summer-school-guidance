# Guidance for Course Authors: ICCS Summer School

This document provides broad and general guidance for preparing and delivering quality
teaching materials for the ICCS Summer School. Instructors have freedom in content,
style, and delivery, and how to meet these recommendations. The guidance is intended to
ensure materials are well prepared, reusable, and consistent for participants across courses.

This guidance also applies when revisiting or updating previous sessions. Existing
materials should be reviewed and updated to meet these guidelines, ensuring consistency
and quality for all participants.



## Materials

All materials for your course should be provided online and be easily accessible. This
will most often be in the form of a GitHub repository.

- The repository should include a `README.md` describing the course, its objectives, and
  instructions for participants as detailed below.
    - This guidance repository provides [a template](./README_template.md) to help you
      get started.
- A [suitable licence](https://choosealicense.com/) should be attached to all materials.
    - The MIT Licence is recommended for code; a
      [Creative Commons licence](https://creativecommons.org/share-your-work/cclicenses/)
      can be used for teaching materials.
    - Clearly state the chosen licence(s) in your README and include a `LICENSE` file.
- Slides should be made available as a PDF, or as a webpage using Quarto, Pluto.jl, HackMD,
  or similar tools. All slides and materials should be accessible online.
- All code, exercises, and workshop materials should be included in the repository with
  any additional dependencies documented in the README.
    - Good software engineering standards should be followed throughout (see the RSE Skills
      course for guidance). Code should be documented, reproducible, and follow best
      practices.
- The ICCS logo and branding should be used on slides and in the repository where appropriate.
    - A [suitable image](./images/UCAM_ICCS_Logo.png) is provided in this repository.



## Pedagogy and Course Content

- All materials should have clear, explicit learning objectives, stated at the start of
  both your README and slides. These should guide the structure and content of your course.
- The structure of your course should be clear, with a logical flow from learning objectives
  to exercises and solutions.
- Worked examples or solutions to exercises should be provided where possible, to support
  self-study and revision.
- Use the provided [`README_template.md`](./README_template.md) as a starting point for your
  course repository. Adapt as needed, but ensure all sections are completed and relevant.
- For detailed guidance on pedagogy and lesson preparation, refer to the Software Carpentries'
  [Lesson Development Training](https://carpentries.github.io/lesson-development-training/).



## Preparation and Delivery

- They key thing to mention here is that materials always take longer to prepare than
  anticipated, and instructors generally try to include too much material for the available
  time.
    - Start preparation early and incorporate it into your regular work schedule, managing the
      same as you would a software or research project.
    - Prioritise your learning objectives to keep key content within the lesson time.
        - There may be technical difficulties and participants will have
          questions. It is better to have too little material with more time for
          discussion than too much.
        - Remember that new learners will take longer to complete your exercises than you do.
- For delivery and teaching guidance, see the Software Carpentries
  [Instructor Training](https://carpentries.github.io/instructor-training/).
    - Consider how participants will learn, aiming to go beyond just Passive learning
      (reading and listening) to incorporate Active (writing code, running examples),
      Constructive (experimenting, solving problems), and Interactive (discussion)
      elements. For more see the [ICAP framework](https://doi.org/10.1080/00461520.2014.965823) 
      which suggests deeper learning is attained when moving up the hierarchy from
      Passive to Interactive.
- Code, installation instructions, and workshop materials should be tested on multiple
  systems by multiple people before the summer school to ensure they are robust.
    - Accessibility should be considered. E.g if working with notebooks try to provide
      alternative formats (e.g., GitHub Codespaces, Google Colab, Binder) for exercises
      to support participants who may have difficulties with local installation.
    - At the summer school ~100 participants will be trying to access materials over
      the wifi connection. If you have a large repository or require large datasets/downloads
      then reduce these in size as much as possible, ask participants to obtain them in
      advance, and/or have backup materials (e.g. storage device) available on the day.
- It is advised to seek external review of your materials against this
  guidance from others preparing courses, in addition to a practice session.
- For new courses, a practice delivery session should be conducted at least one month in
  advance. Use this to gather feedback and make necessary improvements. Sessions often take
  longer than anticipated; plan accordingly.



## Examples of Good Practice

- [Practical ML with PyTorch](https://github.com/Cambridge-ICCS/practical-ml-with-pytorch)
- [RSE Skills Course](https://github.com/jatkinson1000/rse-skills-workshop)
- [FTorch Workshop](https://github.com/Cambridge-ICCS/FTorch-workshop)



## Further Guidance and Support

For any questions or support, please reach out to the RSE team, Jack Atkinson, or
Dominic Orchard.


---


## Setting Up a New Repository

- Create a new repository, ideally under the [ICCS GitHub organisation](https://github.com/Cambridge-ICCS).
- Initialise the repository with a `README.md` (see the provided
  [`README_template.md`](./README_template.md) for structure and recommended sections).
- Add a suitable `LICENSE` file. For code, the MIT Licence is recommended. For teaching
  materials, consider a Creative Commons licence. Guidance on adding a licence is available
  in the [GitHub documentation](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).
  Clearly state the chosen licence(s) in your README.
- Add your workshop materials using version control.
