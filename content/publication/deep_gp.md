+++
title = "Dense gaussian processes for few-shot segmentation"
date = "2022-10-22"

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
publication = "ECCV, 2022"
#publication_short = "Arxiv Preprint"

# Abstract and optional shortened version.
abstract = "Few-shot segmentation is a challenging dense prediction task, which entails segmenting a novel query image given only a small annotated support set. The key problem is thus to design a method that aggregates detailed information from the support set, while being robust to large variations in appearance and context. To this end, we propose a few-shot segmentation method based on dense Gaussian process (GP) regression. Given the support set, our dense GP learns the mapping from local deep image features to mask values, capable of capturing complex appearance distributions. Furthermore, it provides a principled means of capturing uncertainty, which serves as another powerful cue for the final segmentation, obtained by a CNN decoder. Instead of a one-dimensional mask output, we further exploit the end-to-end learning capabilities of our approach to learn a high-dimensional output space for the GP. Our approach sets a new state-of-the-art on the PASCAL-5i and COCO-20i benchmarks, achieving an absolute gain of +8.4 mIoU in the COCO-20i 5-shot setting. Furthermore, the segmentation quality of our approach scales gracefully when increasing the support set size, while achieving robust cross-dataset transfer. Code and trained models are available at https://github.com/joakimjohnander/dgpnet."


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
