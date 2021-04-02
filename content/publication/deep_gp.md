+++
title = "Deep Gaussian Processes for Few-Shot Segmentation"
date = "2021-03-30"

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["J Johnander", "J Edstedt", "M Danelljan","M Felsberg", "F Khan"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference proceedings
# 2 = Journal
# 3 = Work in progress
# 4 = Technical report
# 5 = Book
# 6 = Book chapter
publication_types = ["1"]

# Publication name and optional abbreviated version.
publication = "Preprint, 2021"
#publication_short = "Arxiv Preprint"

# Abstract and optional shortened version.
abstract = "Few-shot segmentation is a challenging task, requiring the extraction of a generalizable representation from only a few annotated samples, in order to segment novel query images. A common approach is to model each class with a single prototype. While conceptually simple, these methods suffer when the target appearance distribution is multimodal or not linearly separable in feature space. To tackle this issue, we propose a few-shot learner formulation based on Gaussian process (GP) regression. Through the expressivity of the GP, our approach is capable of modeling complex appearance distributions in the deep feature space. The GP provides a principled way of capturing uncertainty, which serves as another powerful cue for the final segmentation, obtained by a CNN decoder. We further exploit the end-to-end learning capabilities of our approach to learn the output space of the GP learner, ensuring a richer encoding of the segmentation mask. We perform comprehensive experimental analysis of our few-shot learner formulation. Our approach sets a new state-of-theart for 5-shot segmentation, with mIoU scores of 68.1 and 49.8 on PASCAL-5i and COCO-20i, respectively."


# Featured image thumbnail (optional)
image_preview = "deep_gp.png"

# Is this a selected publication? (true/false)
selected = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
projects = []

# Links (optional).
url_pdf = "https://arxiv.org/abs/2103.16549"
# url_dataset = "#"
# url_project = "#"
# url_source = "#"

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# url_custom = [{name = "Link to paper", url = "http://proceedings.mlr.press/v97/martens19a.html"}]

# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "deep_gp.png"
caption = "asd"

+++
