/* =====================================================================
   ALL PUBLICATIONS — one list, used by both the homepage
   ("Selected Publications") and publications.html (full list).

   To add a paper: copy one { ... } block, paste it at the top of its
   year, and fill in the fields. Fields you don't need can be left out.

     type     : "conference" | "journal" | "workshop" | "preprint" | "chapter" | "thesis"
     tag      : the short venue label shown in the chip, e.g. "ACL 2026"
     venue    : the full venue name without acronym or year; the tag is added in brackets automatically
     selected : true  -> also shown on the homepage (keep ~10)
     featured : true highlights it as representative work (homepage and full list)
     img      : small 16:10 thumbnail for the homepage (Images/pubs/thumbs/, 480x300)
     fig      : the full-size figure that opens when the thumbnail is clicked
     badges   : short highlights shown in gold, e.g. "Oral" or "NeurIPS 2024 Workshop"
     notes    : "Also presented at ..." lines
     links    : [label, url] pairs, shown as small buttons
     media    : press coverage; shown behind a "Media" button
   Your name is bolded automatically. "*" marks equal contribution.
   ===================================================================== */
window.PUBLICATIONS = [

  /* ---------------- 2026 ---------------- */
  {
    year: 2026, type: "conference", tag: "ACL 2026", selected: true, featured: true,
    img: "Images/pubs/thumbs/chartagent.png", fig: "Images/pubs/chartagent.png",
    title: "ChartAgent: A Multimodal Agent for Visually Grounded Reasoning in Complex Chart Question Answering",
    authors: "Rachneet Kaur, Nishan Srishankar, Zhen Zeng, Sumitra Ganesh",
    venue: "Annual Meeting of the Association for Computational Linguistics",
    notes: ["Also presented at NeurIPS Workshop on Multimodal Algorithmic Reasoning, 2025 (Oral; ~15% of accepted papers)"],
    badges: ["NeurIPS 2025 Workshop Oral"],
    links: [["PDF", "https://aclanthology.org/2026.acl-long.843.pdf"],
            ["arXiv", "https://arxiv.org/abs/2510.04514"],
            ["Slides", "https://drive.google.com/file/d/1OYQCQDBNmMGkQEwc9grvLxQXUau_gq67/view?usp=sharing"],
            ["Poster", "https://drive.google.com/file/d/1zMNfstQ8HJazS4ooTWrSETKRjksJAC3Y/view?usp=sharing"]]
  },
  {
    year: 2026, type: "conference", tag: "ACL 2026", selected: true, featured: true,
    img: "Images/pubs/thumbs/slideagent.png", fig: "Images/pubs/slideagent.png",
    title: "SlideAgent: Hierarchical Agentic Framework for Multi-Page Visual Document Understanding",
    authors: "Yiqiao Jin, Rachneet Kaur, Zhen Zeng, Sumitra Ganesh, Srijan Kumar",
    venue: "Annual Meeting of the Association for Computational Linguistics",
    badges: ["NeurIPS 2025 Workshop"],
    notes: ["Also presented at NeurIPS Workshop on Multimodal Algorithmic Reasoning, 2025"],
    links: [["PDF", "https://aclanthology.org/2026.acl-long.677.pdf"],
            ["arXiv", "https://arxiv.org/abs/2510.26615"],
            ["Webpage", "https://slideagent.github.io/"],
            ["Slides", "https://drive.google.com/file/d/1dIfO7ggdVnSKGGu_JbAgd1kLHOHyQ8MN/view?usp=sharing"]]
  },
  {
    year: 2026, type: "conference", tag: "ACL 2026 Industry", selected: true,
    img: "Images/pubs/thumbs/mmbizrag.png", fig: "Images/pubs/mmbizrag.png",
    title: "MM-BizRAG: Rethinking Multimodal Retrieval-Augmented Generation for General Purpose Enterprise Q&A",
    authors: "Hanoz Bhathena, Parin Rajesh Jhaveri, Rohan Mittal, Prateek Singh, Aymen Kallala, Rachneet Kaur, Yiqiao Jin, Zhen Zeng, Adwait Ratnaparkhi, Denis Kochedykov",
    venue: "Annual Meeting of the Association for Computational Linguistics, Industry Track",
    links: [["PDF", "https://aclanthology.org/2026.acl-industry.134.pdf"]]
  },
  {
    year: 2026, type: "conference", tag: "LREC 2026", selected: true,
    img: "Images/pubs/thumbs/tsreport.png", fig: "Images/pubs/tsreport.png",
    title: "Systematic Multi-Aspect Evaluation of Time Series-Based Report Generation: The Case of Financial Analysis from Stock Data",
    authors: "Elizabeth Fons*, Elena Kochkina*, Rachneet Kaur, Zhen Zeng, Berowne Hlavaty, Charese Smiley, Svitlana Vyetrenko, Manuela Veloso",
    venue: "15th Language Resources and Evaluation Conference",
    links: [["PDF", "http://www.lrec-conf.org/proceedings/lrec2026/pdf/2026.lrec2026-1.305.pdf"]]
  },

  /* ---------------- 2025 ---------------- */
  {
    year: 2025, type: "conference", tag: "ACL 2025", selected: true, featured: true,
    img: "Images/pubs/thumbs/adaptagent.png", fig: "Images/pubs/adaptagent.png",
    title: "AdaptAgent: Adapting Multimodal Web Agents with Few-Shot Learning from Human Demonstrations",
    authors: "Gaurav Verma, Rachneet Kaur, Nishan Srishankar, Zhen Zeng, Tucker Balch, Manuela Veloso",
    venue: "Annual Meeting of the Association for Computational Linguistics",
    badges: ["NeurIPS 2024 Workshop"],
    notes: ["Also presented at NeurIPS Workshop on Adaptive Foundation Models, 2024"],
    links: [["PDF", "https://aclanthology.org/2025.acl-long.1008.pdf"],
            ["arXiv", "https://arxiv.org/abs/2411.13451"],
            ["Slides", "https://drive.google.com/file/d/1L2pzL8NAhrTUBbg5zYlfTGuz7kQFw2zc/view?usp=sharing"],
            ["Poster", "https://drive.google.com/file/d/1_CX9dIgDlwESJ-L2ngJ0Mf13_AUeDRZH/view?usp=sharing"],
            ["Video", "https://underline.io/lecture/121382-adaptagent-adapting-multimodal-web-agents-with-few-shot-learning-from-human-demonstrations"]],
    media: [{ t: "Ep5: Multimodal AI Agents: Benchmarking, Adapting, and Adversarial attacks",
              s: [["Agents of Tomorrow Podcast", "https://podcasts.apple.com/ca/podcast/ep5-multimodal-ai-agents-benchmarking-adapting-and/id1776144369?i=1000678161711"]] }]
  },
  {
    year: 2025, type: "conference", tag: "ACL 2025", selected: true,
    img: "Images/pubs/thumbs/letsc.png", fig: "Images/pubs/letsc.png",
    title: "LETS-C: Leveraging Language Embedding for Time Series Classification",
    authors: "Rachneet Kaur, Zhen Zeng, Tucker Balch, Manuela Veloso",
    venue: "Annual Meeting of the Association for Computational Linguistics",
    badges: ["NeurIPS 2024 Workshop"],
    notes: ["Also presented at NeurIPS Workshop on Time Series in the Age of Large Models, 2024"],
    links: [["PDF", "https://aclanthology.org/2025.acl-long.1557.pdf"],
            ["arXiv", "https://arxiv.org/abs/2407.06533"],
            ["Slides", "https://drive.google.com/file/d/1Vi_fJ81NxMtiUtVKslsmzLrRHQdbulDJ/view?usp=sharing"],
            ["Poster", "https://drive.google.com/file/d/1PUJFqz2a76b9Ryuq9aQfQReFaGggHXDu/view?usp=sharing"],
            ["Video", "https://underline.io/lecture/123303-lets-c-leveraging-text-embedding-for-time-series-classification"]]
  },
  {
    year: 2025, type: "conference", tag: "COLING 2025 Industry", selected: true,
    img: "Images/pubs/thumbs/law.png", fig: "Images/pubs/law.png",
    title: "LAW: Legal Agentic Workflows for Custody and Fund Services Contracts",
    authors: "William Watson, Nicole Cho, Nishan Srishankar, Zhen Zeng, Lucas Cecchi, Daniel Scott, Suchetha Siddagangappa, Rachneet Kaur, Tucker Balch, Manuela Veloso",
    venue: "31st International Conference on Computational Linguistics, Industry Track",
    links: [["PDF", "https://aclanthology.org/2025.coling-industry.50.pdf"]]
  },
  {
    year: 2025, type: "preprint", tag: "arXiv 2025",
    title: "Creating a Causally Grounded Rating Method for Assessing the Robustness of AI Models for Time-Series Forecasting",
    authors: "Kausik Lakkaraju, Rachneet Kaur, Parisa Zehtabi, Sunandita Patra, Siva Likitha Valluru, Zhen Zeng, Biplav Srivastava, Marco Valtorta",
    venue: "Preprint, under review",
    links: [["arXiv", "https://arxiv.org/abs/2502.12226"]]
  },

  /* ---------------- 2024 ---------------- */
  {
    year: 2024, type: "conference", tag: "EMNLP 2024", selected: true,
    img: "Images/pubs/thumbs/tsfeatures.png", fig: "Images/pubs/tsfeatures.png",
    title: "Evaluating Large Language Models on Time Series Feature Understanding: A Comprehensive Taxonomy and Benchmark",
    authors: "Elizabeth Fons, Rachneet Kaur, Soham Palande, Zhen Zeng, Tucker Balch, Manuela Veloso, Svitlana Vyetrenko",
    venue: "Empirical Methods in Natural Language Processing",
    badges: ["ICML 2024 Workshop"],
    notes: ["Also presented at ICML Workshop on Data-centric Machine Learning Research: Datasets for Foundation Models, 2024"],
    links: [["PDF", "https://aclanthology.org/2024.emnlp-main.1204.pdf"],
            ["arXiv", "https://arxiv.org/abs/2404.16563"],
            ["Slides", "https://drive.google.com/file/d/1qQSvOom7xjhzk38tSuje3DnRLYKOWvw5/view?usp=sharing"],
            ["Poster", "https://drive.google.com/file/d/1xG2PWuTHwKz5xKS6IIxi6eZyCE_w0S0n/view?usp=sharing"],
            ["Video", "https://underline.io/lecture/108161-evaluating-large-language-models-on-time-series-feature-understanding-a-comprehensive-taxonomy-and-benchmark"]]
  },
  {
    year: 2024, type: "conference", tag: "ICAIF 2024", selected: true,
    img: "Images/pubs/thumbs/tadacap.png", fig: "Images/pubs/tadacap.png",
    title: "TADACap: Time-series Adaptive Domain-Aware Captioning",
    authors: "Elizabeth Fons, Rachneet Kaur, Zhen Zeng, Soham Palande, Tucker Balch, Svitlana Vyetrenko, Manuela Veloso",
    venue: "5th ACM International Conference on AI in Finance",
    badges: ["Oral (~18% of submissions)"],
    notes: ["Also presented at JPMorgan Chase & Co. AI Summit, 2023"],
    links: [["PDF", "https://dl.acm.org/doi/abs/10.1145/3677052.3698690"],
            ["arXiv", "https://arxiv.org/abs/2504.11441"],
            ["Slides", "https://drive.google.com/file/d/1w1z4tigs_8DN3jSyt5NTBOaqJ5-6xgsX/view?usp=sharing"]]
  },
  {
    year: 2024, type: "journal", tag: "Sensors 2024",
    title: "Tai Chi Expertise Classification in Older Adults Using Wrist Wearables and Machine Learning",
    authors: "Yang Hu, Mengyue Huang, Jonathan Cerna, Rachneet Kaur, Manuel E Hernandez",
    venue: "MDPI",
    links: [["PDF", "https://www.mdpi.com/1424-8220/24/15/4955"]]
  },
  {
    year: 2024, type: "preprint", tag: "arXiv 2024",
    title: "Rating Multi-Modal Time-Series Forecasting Models (MM-TSFM) for Robustness Through a Causal Lens",
    authors: "Kausik Lakkaraju, Rachneet Kaur, Zhen Zeng, Parisa Zehtabi, Sunandita Patra, Biplav Srivastava, Marco Valtorta",
    venue: "Preprint, under review",
    links: [["arXiv", "https://arxiv.org/abs/2406.12908"]]
  },

  /* ---------------- 2023 ---------------- */
  {
    year: 2023, type: "journal", tag: "IEEE-JBHI 2023", selected: true,
    img: "Images/pubs/thumbs/jbhi.png", fig: "projects/JBHI2022_graphical_abstract.jpeg",
    title: "A Vision-Based Framework for Predicting Multiple Sclerosis and Parkinson's Disease Gait Dysfunctions — A Deep Learning Approach",
    authors: "Rachneet Kaur, Robert W Motl, Richard Sowers, Manuel E Hernandez",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    badges: ["Top 50 IEEE-JBHI article", "NeurIPS 2021 Workshop"],
    notes: ["Also presented at NeurIPS Women in Machine Learning (WiML) Workshop, 2021"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/9896159"],
            ["Code", "https://github.com/kaurrachneet6/Vision-Based-Gait-Analysis-Framework-for-Predicting-Multiple-Sclerosis"],
            ["Slides", "https://drive.google.com/file/d/16vZI1DUZeblEbu3YhRrH9wTwVzlZgSpH/view?usp=sharing"],
            ["Poster", "https://drive.google.com/file/d/1EOG8tQ2jumf6PKml-llCtCBzBDUd-_jn/view?usp=sharing"],
            ["Webpage", "projects/JBHI2022.html"],
            ["BibTeX", "Data/JBHI2022.bib"]],
    media: [{ t: "Team uses digital cameras, machine learning to predict neurological disease",
              s: [["Illinois News Bureau", "https://news.illinois.edu/view/6367/1252470548"],
                  ["Carle Illinois College of Medicine", "https://medicine.illinois.edu/news/team-uses-digital-cameras-machine-learning-to-predict-neurological-disease"],
                  ["EurekAlert!", "https://www.eurekalert.org/news-releases/967441"],
                  ["Brighter Side of News", "https://www.thebrighterside.news/post/researchers-use-digital-cameras-machine-learning-to-predict-neurological-disease/"],
                  ["Medical Xpress", "https://medicalxpress.com/news/2022-10-team-digital-cameras-machine-neurological.html"]] },
            { t: "At-home Digital Cameras Monitor Gait, May Speed Diagnosis",
              s: [["Parkinson's News Today", "https://parkinsonsnewstoday.com/news/at-home-cameras-monitor-gait-speed-parkinsons-diagnosis/"]] },
            { t: "New Gait Analysis Tool Found to Correctly ID MS Patients in Videos",
              s: [["Multiple Sclerosis News Today", "https://multiplesclerosisnewstoday.com/news-posts/2022/10/13/gait-analysis-tool-correctly-ids-ms-patients-video-recordings/"]] },
            { t: "Video and AI for the diagnosis of neurological diseases",
              s: [["Medilogy", "https://www.medilogy.it/html/news/video-e-ai-per-la-diagnosi-di-malattie-neurologiche.asp"]] }]
  },
  {
    year: 2023, type: "journal", tag: "IEEE-TBME 2023", selected: true,
    img: "Images/pubs/thumbs/msstride.png", fig: "Images/pubs/msstride.png",
    title: "Deep Learning for Multiple Sclerosis Differentiation Using Multi-Stride Dynamics in Gait",
    authors: "Rachneet Kaur, Joshua Levy, Robert W Motl, Richard Sowers, Manuel E Hernandez",
    venue: "IEEE Transactions on Biomedical Engineering",
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/10023977"],
            ["Code", "https://github.com/kaurrachneet6/Deep-Learning-for-Multiple-Sclerosis-Differentiation-Using-Multi-Stride-Dynamics-in-Gait/"],
            ["Slides", "https://drive.google.com/file/d/121JZH-9B93Q2VLxtplGyNZG-hP4LdmCo/view?usp=sharing"]]
  },
  {
    year: 2023, type: "journal", tag: "Patterns 2023", selected: true,
    img: "Images/pubs/thumbs/alignedumap.png", fig: "Images/pubs/alignedumap.png",
    title: "Application of Aligned-UMAP to longitudinal biomedical studies",
    authors: "Anant Dadu, Vipul K Satone, Rachneet Kaur, Mathew J Koretsky, Hirotaka Iwaki, Yue A Qi, Daniel M Ramos, Brian Avants, Jacob Hesterman, Roger Gunn, Mark R Cookson, Michael E Ward, Andrew B Singleton, Roy H Campbell, Mike A Nalls, Faraz Faghri",
    venue: "Cell Press",
    links: [["PDF", "https://www.cell.com/patterns/fulltext/S2666-3899(23)00081-8"],
            ["Code", "https://github.com/NIH-CARD/AlignedUMAP-BiomedicalData"],
            ["Dashboard", "https://alignedumap-biomedicaldata.streamlit.app/"]],
    media: [{ t: "Application of Aligned-UMAP to longitudinal biomedical studies",
              s: [["Health & Medicine Week, NewsRx", "https://go.gale.com/ps/i.do?id=GALE%7CA731091008&sid=sitemap&v=2.1&it=r&p=HRCA&sw=w"]] }]
  },
  {
    year: 2023, type: "conference", tag: "ICAIF 2023", selected: true,
    img: "Images/pubs/thumbs/pixels.png", fig: "Images/pubs/pixels.png",
    title: "From Pixels to Predictions: Spectrogram and Vision Transformer for Better Time Series Forecasting",
    authors: "Zhen Zeng, Rachneet Kaur, Suchetha Siddagangappa, Tucker Balch, Manuela Veloso",
    venue: "4th ACM International Conference on AI in Finance",
    badges: ["Oral (~18% of submissions)", "Best Presentation, JPMC AI Summit"],
    notes: ["Also presented at JPMorgan Chase & Co. AI Summit, 2023 (Best Presentation award)"],
    links: [["PDF", "https://dl.acm.org/doi/10.1145/3604237.3626905"],
            ["arXiv", "https://arxiv.org/abs/2403.11047"],
            ["Slides", "https://drive.google.com/file/d/1SsU3orgavbooFA2Oda0IhbfiJ_HIyGB2/view?usp=sharing"]],
    media: [{ t: "Spectrograms & Vision Transformers for (Financial) Time Series Forecasting",
              s: [["Medium, Part 1", "https://medium.com/correll-lab/spectrograms-vision-transformers-for-time-series-forecasting-929163fd8c52"],
                  ["Medium, Part 2", "https://medium.com/correll-lab/spectrograms-vision-transformers-for-time-series-forecasting-part-2-828733259da0"]] }]
  },
  {
    year: 2023, type: "journal", tag: "Sensors 2023",
    title: "A Deep Learning Approach for Automatic and Objective Grading of the Motor Impairment Severity in Parkinson's Disease for Use in Tele-Assessments",
    authors: "Mehar Singh, Prithvi Prakash, Rachneet Kaur, Richard Sowers, James Robert Brašić, Manuel Enrique Hernandez",
    venue: "MDPI",
    links: [["PDF", "https://www.mdpi.com/1424-8220/23/21/9004"]],
    media: [{ t: "Wearable sensors for Parkinson's can improve with machine learning, data from healthy adults",
              s: [["Illinois News Bureau", "https://news.illinois.edu/view/6367/1109984968"],
                  ["Carle Illinois College of Medicine", "https://medicine.illinois.edu/news/wearable-sensors-for-parkinsons-can-improve-with-machine-learning-data-from-healthy-adults"],
                  ["Medical Xpress", "https://medicalxpress.com/news/2024-04-wearable-sensors-parkinson-machine-healthy.html"],
                  ["Ground News", "https://ground.news/article/wearable-sensors-for-parkinsons-can-improve-with-machine-learning-data-from-healthy-adults"]] },
            { t: "Small, inexpensive wearable sensors could improve Parkinson's treatment",
              s: [["Medical Design & Outsourcing", "https://www.medicaldesignandoutsourcing.com/small-wearable-low-cost-sensors-parkinsons-disease-treatment/"]] }]
  },
  {
    year: 2023, type: "conference", tag: "IEEE EMBC 2023",
    title: "A Deep Learning Approach for Grading of Motor Impairment Severity in Parkinson's Disease",
    authors: "Prithvi Prakash, Rachneet Kaur, Joshua Levy, Richard Sowers, James Brašić, Manuel E Hernandez",
    venue: "45th Annual International Conference of the IEEE Engineering in Medicine & Biology Society",
    badges: ["Oral"],
    links: [["PDF", "https://pubmed.ncbi.nlm.nih.gov/38083387/"],
            ["Slides", "https://docs.google.com/presentation/d/1b1gyDXGkkAGcOptofvoH2r17SeAGsri_/edit?usp=sharing"]]
  },
  {
    year: 2023, type: "workshop", tag: "AAAI AI-Fin 2023",
    title: "Financial Time Series Forecasting using CNN and Transformer",
    authors: "Zhen Zeng, Rachneet Kaur, Suchetha Siddagangappa, Saba Rahimi, Tucker Balch, Manuela Veloso",
    venue: "37th AAAI Conference on Artificial Intelligence, Bridge on AI for Financial Services",
    links: [["PDF", "https://arxiv.org/abs/2304.04912"]]
  },

  /* ---------------- 2022 ---------------- */
  {
    year: 2022, type: "journal", tag: "npj Parkinson's Disease 2022", selected: true,
    img: "Images/pubs/thumbs/pdsubtypes.png", fig: "Images/pubs/pdsubtypes.png",
    title: "Identification and prediction of Parkinson's disease subtypes and progression using machine learning in two cohorts",
    authors: "Anant Dadu, Vipul Satone, Rachneet Kaur, Sayed Hadi Hashemi, Hampton Leonard, Hirotaka Iwaki, Mary B Makarious, Kimberley J Billingsley, Sara Bandres-Ciga, Lana J Sargent, Alastair J Noyce, Ali Daneshmand, Cornelis Blauwendraat, Ken Marek, Sonja W Scholz, Andrew B Singleton, Mike A Nalls, Roy H Campbell, Faraz Faghri",
    venue: "Nature Publishing Group",
    links: [["PDF", "https://www.nature.com/articles/s41531-022-00439-z"],
            ["Code", "https://github.com/anant-dadu/PDProgressionSubtypes"],
            ["Dashboard", "https://pdprogressionsubtypes.streamlit.app/"]],
    media: [{ t: "Machine Learning Models Help Identify Subtypes of Parkinson Disease",
              s: [["Neurology Advisor", "https://www.neurologyadvisor.com/news/machine-learning-models-identify-subtypes-parkinson-disease/"]] },
            { t: "Predicting Parkinson's Disease with Machine Learning",
              s: [["Precision Medicine, Oxford Global", "https://oxfordglobal.com/precision-medicine/resources/predicting-parkinsons-disease-with-machine-learning"]] },
            { t: "Machine Learning to Help Predict PD Progression?",
              s: [["NeuroDerm", "https://neuroderm.com/living-with-parkinsons/info-center/machine-learning/"]] }]
  },
  {
    year: 2022, type: "thesis", tag: "PhD Thesis 2022",
    title: "Machine Learning for Digital Health: Transforming Clinical Data into Knowledge",
    authors: "Rachneet Kaur",
    venue: "PhD Thesis, University of Illinois at Urbana-Champaign, Dec 2022. Committee: Richard B. Sowers, Carolyn L. Beck, Thenkurussi Kesavadas, Manuel E. Hernandez",
    links: [["PDF", "https://www.ideals.illinois.edu/items/126753"],
            ["Slides", "https://drive.google.com/file/d/1jMopEiqHA7FCgEj4exm063d0RToROzfC/view?usp=sharing"]]
  },

  /* ---------------- 2021 ---------------- */
  {
    year: 2021, type: "journal", tag: "Energy & AI 2021",
    img: "projects/graphical_abstract.png",
    title: "Machine learning and price-based load scheduling for an optimal IoT control in the smart and frugal home",
    authors: "Rachneet Kaur, Clara Schaye, Kevin Thompson, Daniel C Yee, Rachel Zilz, RS Sreenivas, Richard B Sowers",
    venue: "Elsevier",
    badges: ["1st Runner-Up, Mottier Innovation Challenge"],
    notes: ["Also presented at INFORMS Annual Meeting, 2018 (Oral)"],
    links: [["PDF", "https://www.sciencedirect.com/science/article/pii/S2666546820300422"],
            ["Webpage", "projects/EnergyAndAI.html"],
            ["Video", "https://youtu.be/YIdqtpFE2ls"],
            ["Slides", "https://drive.google.com/file/d/1mRNTGGe59-p3ZE7IYORbsfIf6FbXGb3e/view?usp=sharing"],
            ["BibTeX", "Data/EnergyAndAI2021.bib"]],
    media: [{ t: "New model shows how to make smart homes more frugal",
              s: [["UIUC News", "https://las.illinois.edu/news/2021-04-01/new-model-shows-how-make-smart-homes-more-frugal"]] }]
  },
  {
    year: 2021, type: "journal", tag: "IEEE-TBME 2021", selected: true,
    badges: ["Grace Hopper 2020", "IEEE NER 2019"],
    img: "Images/pubs/thumbs/tbme.png", fig: "projects/images/tbme_figure.PNG",
    title: "Predicting Multiple Sclerosis From Gait Dynamics Using an Instrumented Treadmill: A Machine Learning Approach",
    authors: "Rachneet Kaur, Zizhang Chen, Robert Motl, Manuel E Hernandez, Richard Sowers",
    venue: "IEEE Transactions on Biomedical Engineering",
    notes: ["Also presented at Grace Hopper Celebration (GHC), 2020 and IEEE EMBS Conference on Neural Engineering, 2019"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/9311191"],
            ["Code", "https://github.com/kaurrachneet6/Predicting-Multiple-Sclerosis-from-Gait-Dynamics-Using-an-Instrumented-Treadmill"],
            ["Video", "https://youtu.be/r8cfduagJf4"],
            ["Slides", "https://drive.google.com/file/d/19EBpumDRwJfkq0sUHQ2we9JQSAVO1Cq_/view?usp=sharing"],
            ["Webpage", "projects/TBME2020.html"],
            ["BibTeX", "Data/TBME2020.bib"]],
    media: [{ t: "Machine learning helps spot gait problems in individuals with multiple sclerosis",
              s: [["Illinois News Bureau", "https://news.illinois.edu/view/6367/715352095"],
                  ["Carle Illinois College of Medicine", "https://medicine.illinois.edu/news/machine-learning-helps-spot-gait-problems-in-individuals-with-multiple-sclerosis"],
                  ["Tech Briefs", "https://www.techbriefs.com/component/content/article/39579-machine-learning-helps-detect-gait-problems-in-multiple-sclerosis-patients"],
                  ["News Medical", "https://www.news-medical.net/news/20210329/Machine-learning-can-monitor-and-predict-the-progression-of-multiple-sclerosis.aspx"],
                  ["EurekAlert!", "https://www.eurekalert.org/news-releases/598711"],
                  ["Neuroscience News", "https://neurosciencenews.com/ms-gait-machine-learning-18137/"],
                  ["Medical Xpress", "https://medicalxpress.com/news/2021-03-machine-gait-problems-individuals-multiple.html"],
                  ["Neuro Daily", "https://neurodaily.net/2021/03/29/machine-learning-helps-spot-gait-problems-in-individuals-with-multiple-sclerosis/"]] },
            { t: "Machine Learning of Walking Patterns Could Help Predict MS Progression",
              s: [["Multiple Sclerosis News Today", "https://multiplesclerosisnewstoday.com/news-posts/2021/03/31/machine-learning-walking-gait-patterns-predict-progression-multiple-sclerosis-study/"]] },
            { t: "Study Results from University of Illinois Provide New Insights into Multiple Sclerosis",
              s: [["Health & Medicine Week, NewsRx", "https://go.gale.com/ps/i.do?id=GALE%7CA676053230&sid=sitemap&v=2.1&it=r&p=HRCA&sw=w"]] },
            { t: "Machine Learning Catches Multiple Sclerosis-Related Gait Issues",
              s: [["TechTarget", "https://www.techtarget.com/healthtechanalytics/news/366591284/Machine-Learning-Catches-Multiple-Sclerosis-Related-Gait-Issues"],
                  ["India Next", "https://www.indianext.co.in/machine-learning-catches-multiple-sclerosis-related-gait-issues/"]] }]
  },
  {
    year: 2021, type: "conference", tag: "IEEE EMBC 2021",
    title: "Feasibility of VR Technology in Eliciting State Anxiety Changes While Walking in Older Women",
    authors: "Liran Ziegelman, Abdulrahman Alkurdi, Yang Hu, Alka Bishnoi, Rachneet Kaur, Richard Sowers, Elizabeth T Hsiao-Wecksler, Manuel E Hernandez",
    venue: "43rd Annual International Conference of the IEEE Engineering in Medicine & Biology Society",
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/9630542"]]
  },

  /* ---------------- 2020 ---------------- */
  {
    year: 2020, type: "conference", tag: "IEEE EMBC 2020",
    title: "Exploration of Machine Learning to Identify Community Dwelling Older Adults with Balance Dysfunction Using Short Duration Accelerometer Data",
    authors: "Yang Hu*, Alka Bishnoi*, Rachneet Kaur, Richard Sowers, Manuel E Hernandez",
    venue: "42nd Annual International Conference of the IEEE Engineering in Medicine & Biology Society",
    badges: ["Oral"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/9175871"],
            ["Webpage", "projects/accelerometer_balance.html"],
            ["Video", "https://youtu.be/5nKx9IGo3SA"],
            ["Slides", "https://drive.google.com/file/d/1oZHkPkTyOjPfhf4XfGhnjUiydUcKNaIP/view?usp=sharing"],
            ["BibTeX", "Data/Accelerometer_EMBC2020.bib"]]
  },
  {
    year: 2020, type: "conference", tag: "IEEE EMBC 2020",
    title: "Automatic Identification of Brain Independent Components in Electroencephalography Data Collected while Standing in a Virtually Immersive Environment — A Deep Learning-Based Approach",
    authors: "Rachneet Kaur, Maxim Korolkov, Manuel E Hernandez, Richard Sowers",
    venue: "42nd Annual International Conference of the IEEE Engineering in Medicine & Biology Society",
    badges: ["Oral"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/9175741"],
            ["Webpage", "projects/ICdetection.html"],
            ["Video", "https://youtu.be/ei4Xs8M8a-w"],
            ["Slides", "https://drive.google.com/file/d/1q3tLcsCLrJeFSAwC5lkEnGROYFi7jpy4/view?usp=sharing"],
            ["BibTeX", "Data/DeepIC_EMBC2020.bib"]]
  },
  {
    year: 2020, type: "chapter", tag: "Book Chapter 2020",
    title: "Virtual Reality and Movement Disorders",
    authors: "Rachneet Kaur, Manuel Hernandez, Richard Sowers",
    venue: "Virtual Reality: Recent Advancements, Applications and Challenges, River Publishers",
    links: [["Chapter", "https://ieeexplore.ieee.org/document/9227159"],
            ["Book", "https://ieeexplore.ieee.org/book/9218881"],
            ["Google Books", "https://www.google.com/books/edition/Virtual_Reality/IfyGEAAAQBAJ?hl=en"],
            ["Webpage", "projects/virtual_reality_bookchapter.html"],
            ["BibTeX", "Data/VRchapter.bib"]]
  },

  /* ---------------- 2019 ---------------- */
  {
    year: 2019, type: "conference", tag: "IEEE BIBM 2019",
    title: "Using Virtual Reality to Examine the Correlation between Balance Function and Anxiety in Stance",
    authors: "Rongyi Sun*, Rachneet Kaur*, Liran Ziegelman, Shuo Yang, Richard Sowers, Manuel E Hernandez",
    venue: "IEEE International Conference on Bioinformatics and Biomedicine",
    badges: ["Oral"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/8983331"],
            ["Webpage", "projects/balance_anxiety_bibm.html"],
            ["Slides", "https://drive.google.com/file/d/1c4Hzfsq9tmAsYx3BTGVRNVzdC7R1heYo/view?usp=sharing"],
            ["BibTeX", "Data/BIBM2019.bib"]]
  },
  {
    year: 2019, type: "conference", tag: "Humanoids 2019",
    title: "Using Virtual Reality to Examine the Neural and Physiological Anxiety-Related Responses to Balance-Demanding Target-Reaching Leaning Tasks",
    authors: "Rachneet Kaur, Rongyi Sun, Liran Ziegelman, Richard Sowers, Manuel E Hernandez",
    venue: "19th IEEE-RAS International Conference on Humanoid Robots",
    badges: ["Oral"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/9035020"],
            ["Webpage", "projects/anxiety_leaning_task.html"],
            ["Slides", "https://drive.google.com/file/d/1IGiq97Fu5DcyURFBhQZQAsDOzt5WUT4b/view?usp=sharing"],
            ["BibTeX", "Data/Humanoids2019.bib"]]
  },
  {
    year: 2019, type: "conference", tag: "IEEE EMBC 2019",
    title: "Exploring Characteristic Features in Gait Patterns for Predicting Multiple Sclerosis",
    authors: "Rachneet Kaur, Sanjana Menon, Xiaomiao Zhang, Richard Sowers, Manuel E Hernandez",
    venue: "41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society",
    badges: ["Oral"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/8857604"],
            ["BibTeX", "Data/MS_EMBC2019.bib"]]
  },
  {
    year: 2019, type: "conference", tag: "IEEE EMBC 2019",
    title: "Using Virtual Reality to Examine the Neural and Physiological Responses to Height and Perturbations in Quiet Standing",
    authors: "Rachneet Kaur, Rongyi Sun, Liran Ziegelman, Richard Sowers, Manuel E Hernandez",
    venue: "41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society",
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/8857647"],
            ["BibTeX", "Data/VR_EMBC2019.bib"]]
  },
  {
    year: 2019, type: "workshop", tag: "ACRM 2019",
    title: "Using Virtual Reality High Fall-Risk Condition Training to Improve Postural Control Accuracy and Speed",
    authors: "Rongyi Sun, Rachneet Kaur, Richard Sowers, Manuel Hernandez",
    venue: "96th Annual Conference of the American Congress of Rehabilitation Medicine",
    links: [["Abstract", "https://www.archives-pmr.org/article/S0003-9993(19)30940-2/abstract"]]
  },

  /* ---------------- 2018 ---------------- */
  {
    year: 2018, type: "conference", tag: "IEEE EMBC 2018",
    title: "Virtual Reality, Visual Cliffs, and Movement Disorders",
    authors: "Rachneet Kaur, Xun Lin, Alexander Layton, Manuel Hernandez, Richard Sowers",
    venue: "40th Annual International Conference of the IEEE Engineering in Medicine and Biology Society",
    badges: ["Illinois Geometry Lab Research Award"],
    notes: ["Also presented at Grace Hopper Celebration (GHC), 2018 and INFORMS Annual Meeting, 2017"],
    links: [["PDF", "https://ieeexplore.ieee.org/abstract/document/8512246"],
            ["Video", "https://www.youtube.com/watch?v=aa0kkjqf7ww"],
            ["BibTeX", "Data/VirtualRealityVisualCliffsMovementDisorders_EMBC2018.bib"]],
    media: [{ t: "Mind-Reading Robots: ISE professors leap into the world of brain-computer interfaces",
              s: [["UIUC Newsroom", "https://ise.illinois.edu/newsroom/mind-reading-robots"]] }]
  },
  {
    year: 2018, type: "workshop", tag: "NeurIPS ML4H 2018",
    title: "Learning the progression and clinical subtypes of Alzheimer's disease from longitudinal clinical data",
    authors: "Vipul Satone, Rachneet Kaur, Faraz Faghri, Mike A Nalls, Andrew B Singleton, Roy H Campbell",
    venue: "NeurIPS Workshop on Machine Learning for Health",
    notes: ["Also presented at Illinois Health Data Analytics Summit, 2018"],
    links: [["PDF", "https://arxiv.org/abs/1812.00546"],
            ["Extended version", "https://www.biorxiv.org/content/10.1101/792432v2.abstract"],
            ["Code", "https://github.com/vipul105/Alzheimers_Disease_Progression"],
            ["Dashboard", "https://share.streamlit.io/kaurrachneet6/mlforadni/main"],
            ["Poster", "https://drive.google.com/file/d/1vgErcR_6W9nIsz80wNyexTvgqCEVlcw2/view?usp=sharing"],
            ["Webpage", "projects/ADNI2020.html"],
            ["BibTeX", "Data/ML4H2018.bib"]]
  },

  /* ---------------- 2015 ---------------- */
  {
    year: 2015, type: "thesis", tag: "M.Sc. Thesis 2015",
    title: "Computing with Words",
    authors: "Rachneet Kaur",
    venue: "Master's Thesis, Indian Institute of Technology Delhi, May 2015. Advisor: Aparna Mehra",
    links: [["PDF", "https://drive.google.com/file/d/1_YlK8jTJQd_3qYyIFmrUzBEdO0Nd5HXw/view?usp=sharing"],
            ["Slides", "https://drive.google.com/file/d/1q_AUSgbNuilbBSVXgMzFFByefVknJi9g/view?usp=sharing"]]
  }
];
