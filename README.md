# Guidance for Course Authors: ICCS Summer School

This document provides broad and general guidance for preparing and delivering quality
teaching materials for the ICCS Summer School. Instructors have freedom in content,
style, and delivery, and how to meet these recommendations. The guidance is intended to
ensure materials are well prepared, reusable, and consistent for participants across courses.



## Materials

All materials for your course should be provided online in a GitHub repository.

- The repository should include a `README.md` describing the course, its objectives, and
  instructions for participants as detailed below.
- Slides should be made available as a PDF, or as a webpage using Quarto, Pluto.jl, HackMD,
  or similar tools. All slides and materials should be accessible online.
- All code, exercises, and workshop materials should be included in the repository with
  additional dependencies documented in the README.
- A suitable licence should be attached to all materials. The MIT Licence is recommended for
  code; a Creative Commons licence is recommended for teaching materials. Clearly state the
  chosen licence(s) in your README and include a `LICENSE` file.
- The ICCS logo and branding should be used on slides and in the repository where appropriate.



## Pedagogy and Course Content

- All materials should have clear, explicit learning objectives, stated at the start of your
  README and slides. These should guide the structure and content of your course.
    - For detailed guidance on pedagogy and lesson preparation, refer to the Software Carpentries
      [Lesson Development Training](https://carpentries.github.io/lesson-development-training/).
- Worked examples or solutions to exercises should be provided where possible, to support
  self-study and revision.
- Use the provided [`README_template.md`](./README_template.md) as a starting point for your
  course repository. Adapt as needed, but ensure all sections are completed and relevant.



## Preparation and Testing

- For delivery and teaching guidance, see the Software Carpentries
  [Instructor Training](https://carpentries.github.io/instructor-training/).
- Code, installation instructions, and workshop materials should be tested on multiple
  systems, including at least one system other than your own, before the summer school.
- For new courses, a practice delivery session should be conducted at least one month in
  advance. Use this to gather feedback and make necessary improvements. Sessions often take
  longer than anticipated; plan accordingly.
- It is advised to seek external review of your materials against this
  guidance from others preparing courses, in addition to a practice session.
- The structure of your course should be clear, with a logical flow from learning objectives
  to exercises and solutions.
- Accessibility should be considered: provide alternative formats (e.g., Google Colab,
  Binder) for exercises to support participants who may have difficulties with local setup.
- Good software engineering standards should be followed throughout (see the RSE Skills
  course for guidance). Code should be documented, reproducible, and follow best
  practices.



## Examples of Good Practice

- [Practical ML with PyTorch](https://github.com/Cambridge-ICCS/practical-ml-with-pytorch)
- [RSE Skills Course](https://github.com/jatkinson1000/rse-skills-workshop)
- [FTorch Workshop](https://github.com/Cambridge-ICCS/FTorch-workshop)



## Further Guidance and Support

For any questions or support, please reach out to the RSE team, Dominic Orchard, or
Jack Atkinson.


---


## Setting Up a New Repository

- Create a new repository, ideally under the [ICCS GitHub organisation](https://github.com/Cambridge-ICCS).
- Initialise the repository with a `README.md` (see the provided
  [`README_template.md`](./README_template.md) for structure and recommended sections).
- Add a suitable `LICENSE` file. For code, the MIT Licence is recommended. For teaching
  materials, consider a Creative Commons licence. Guidance on adding a licence is available
  in the [GitHub documentation](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).
  Clearly state the chosen licence(s) in your README.
