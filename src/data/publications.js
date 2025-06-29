/*
 * MANUAL PUBLICATION ENTRY GUIDE:
 * 
 * To add a new publication, simply add a new object to this array.
 * Each publication should have:
 * - actualTitle: The full title of the publication
 * - citationDetails: Full citation including authors, conference/journal, and year
 * - year: The publication year (number)
 * - link: DOI link or null if not available
 * - specialMention: Optional field for awards like "Best Paper Candidate" or "Selected as Publicity Paper"
 * 
 * Template:
 * {
 *   "actualTitle": "Your Publication Title Here",
 *   "citationDetails": "Author Names, \"Your Publication Title Here,\" in Conference/Journal Name, 2024",
 *   "year": 2024,
 *   "link": "https://doi.org/your-doi-here", // or null
 *   "specialMention": "Best Paper Candidate" // optional, can be omitted
 * }
 */

const publications = [
  {
    "actualTitle": "On the Design and Fabrication of PATH-based In-Memory Computing Multipliers",
    "citationDetails": "J Modasiya, V Kamineni, M Rashed, M. Liehr, SK Jha, R Ewetz, and N Cady, \"On the Design and Fabrication of PATH-based In-Memory Computing Multipliers,\" in 34th IEEE Microelectronics Design and Test Symposium (MDTS), 2025",
    "year": 2025,
    "link": null
  },
  {
    "actualTitle": "LOGIC: Logic Synthesis for Digital In-Memory Computing",
    "citationDetails": "M Rashed, S. Thijssen, SK Jha, and R Ewetz, \"LOGIC: Logic Synthesis for Digital In-Memory Computing,\" in ACM Transactions on Design Automation of Electronic Systems (TODAES), 2025",
    "year": 2025,
    "link": "https://dl.acm.org/doi/10.1145/3711848"
  },
  {
    "actualTitle": "Equivalence Checking for Flow-Based Computing using Iterative SAT Solving",
    "citationDetails": "S. Thijssen, M Rashed, M. Ahmed, S. Singireddy, SK Jha, and R Ewetz, \"Equivalence Checking for Flow-Based Computing using Iterative SAT Solving,\" in 43rd International Conference On Computer Aided Design (ICCAD), 2024",
    "year": 2024,
    "link": "https://doi.org/10.1145/3676536.3676721"
  },
  {
    "actualTitle": "Execution Sequence Optimization for Processing In-Memory using Parallel Data Preparation",
    "citationDetails": "M Rashed, S. Thijssen, D. Simon, SK Jha, and R Ewetz, \"Execution Sequence Optimization for Processing In-Memory using Parallel Data Preparation,\" in 61st Design Automation Conference (DAC), 2024",
    "year": 2024,
    "link": "https://doi.org/10.1145/3649329.3657348"
  },
  {
    "actualTitle": "Synthesis of Compact Flow-based Computing Circuits from Boolean Expressions",
    "citationDetails": "S. Thijssen, M Rashed, SK Jha, and R Ewetz, \"Synthesis of Compact Flow-based Computing Circuits from Boolean Expressions,\" in 61st Design Automation Conference (DAC), 2024",
    "year": 2024,
    "link": "https://doi.org/10.1145/3649329.3657340"
  },
  {
    "actualTitle": "Towards Area-Efficient Path-Based In-Memory Computing using Graph Isomorphisms",
    "citationDetails": "S. Thijssen, M Rashed, SK Jha, H Zheng, and R Ewetz, \"Towards Area-Efficient Path-Based In-Memory Computing using Graph Isomorphisms,\" in 29th Asia and South Pacific Design Automation Conference (ASP-DAC), 2024",
    "year": 2024,
    "link": "https://ieeexplore.ieee.org/abstract/document/10473850"
  },
  {
    "actualTitle": "READ-based In-Memory Computing using Sentential Decision Diagrams",
    "citationDetails": "S. Thijssen, M Rashed, SK Jha, and R Ewetz, \"READ-based In-Memory Computing using Sentential Decision Diagrams,\" in 29th Asia and South Pacific Design Automation Conference (ASP-DAC), 2024",
    "year": 2024,
    "link": "https://ieeexplore.ieee.org/abstract/document/10473963"
  },
  {
    "actualTitle": "Automated Synthesis of Hardware Designs using Symbolic Feedback and Grammar Constrained Decoding in Large Language Models",
    "citationDetails": "SK Jha, S. Jha, M Rashed, R. Ewetz, and A. Velasquez \"Automated Synthesis of Hardware Designs using Symbolic Feedback and Grammar Constrained Decoding in Large Language Models,\" in IEEE National Aerospace and Electronics Conference (NAECON), 2024",
    "year": 2024,
    "link": "https://ieeexplore.ieee.org/document/10670630/"
  },
  {
    "actualTitle": "STREAM: Towards READ-based In-Memory Computing for Streaming Based Processing for Data-Intensive Applications",
    "citationDetails": "M Rashed,  S. Thijssen, F Yao, SK Jha, and R Ewetz, \"STREAM: Towards READ-based In-Memory Computing for Streaming Based Processing for Data-Intensive Applications,\" in IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2023",
    "year": 2023,
    "link": "https://ieeexplore.ieee.org/abstract/document/10089867"
  },
  {
    "actualTitle": "Automated Synthesis for In-Memory Computing",
    "citationDetails": "M Rashed, S. Thijssen, SK Jha, and R Ewetz, \"Automated Synthesis for In-Memory Computing,\" in 42nd International Conference On Computer Aided Design (ICCAD), 2023",
    "year": 2023,
    "link": "https://ieeexplore.ieee.org/abstract/document/10323667"
  },
  {
    "actualTitle": "Verification of Flow-Based Computing Systems using Bounded Model Checking",
    "citationDetails": "S. Thijssen, S. Singireddy, M Rashed, SK Jha, and R Ewetz, \"Verification of Flow-Based Computing Systems using Bounded Model Checking,\" in 42nd International Conference On Computer Aided Design (ICCAD), 2023",
    "year": 2023,
    "link": "https://ieeexplore.ieee.org/abstract/document/10323708"
  },
  {
    "actualTitle": "Path-based Processing using In-Memory Systolic Arrays for Accelerating Data-Intensive Applications",
    "citationDetails": "M Rashed, S. Thijssen, SK Jha, H Zheng, and R Ewetz, \"Path-based Processing using In-Memory Systolic Arrays for Accelerating Data-Intensive Applications,\" in 42nd International Conference On Computer Aided Design (ICCAD), 2023",
    "year": 2023,
    "link": "https://ieeexplore.ieee.org/abstract/document/10323622"
  },
  {
    "actualTitle": "Input-Aware Flow-Based In-Memory Computing",
    "citationDetails": "S. Singireddy, M Rashed, S. Thijssen, R Ewetz, and SK Jha, \"Input-Aware Flow-Based In-Memory Computing,\" in 41st International Conference on Computer Design (ICCD), 2023",
    "year": 2023,
    "link": "https://ieeexplore.ieee.org/abstract/document/10361011"
  },
  {
    "actualTitle": "UpTime: Towards Flow-based In-Memory Computing with High Fault-Tolerance",
    "citationDetails": "S. Thijssen, M Rashed, SK Jha, and R Ewetz, \"UpTime: Towards Flow-based In-Memory Computing with High Fault-Tolerance,\" in 60th Design Automation Conference (DAC), 2023",
    "year": 2023,
    "link": "https://ieeexplore.ieee.org/abstract/document/10247692"
  },
  {
    "actualTitle": "Discovering the In-Memory Kernels of 3D Dot-Product Engines",
    "citationDetails": "M Rashed, SK Jha, and R Ewetz, \"Discovering the In-Memory Kernels of 3D Dot-Product Engines,\" in 28th Asia and South Pacific Design Automation Conference (ASP-DAC), 2023",
    "year": 2023,
    "link": "https://dl.acm.org/doi/abs/10.1145/3566097.3567855"
  },
  {
    "actualTitle": "PATH: Evaluation of Boolean Logic using Path-based In-Memory Computing Systems",
    "citationDetails": "S. Thijssen, M Rashed, SK Jha, and R Ewetz, \"PATH: Evaluation of Boolean Logic using Path-based In-Memory Computing Systems,\" in IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2023",
    "year": 2023,
    "link": "https://ieeexplore.ieee.org/abstract/document/10365674"
  },
  {
    "actualTitle": "Logic Synthesis for Digital In-Memory Computing",
    "citationDetails": "M Rashed, SK Jha, and R Ewetz, \"Logic Synthesis for Digital In-Memory Computing,\" in 41st International Conference On Computer Aided Design (ICCAD), 2022 (Best Paper Candidate)",
    "year": 2022,
    "link": "https://dl.acm.org/doi/abs/10.1145/3508352.3549348",
    "specialMention": "Best Paper Candidate"
  },
  {
    "actualTitle": "Towards Resilient Analog In-Memory Deep Learning via Data Layout Re-Organization",
    "citationDetails": "M Rashed, A Awad, SK Jha, and R Ewetz, \"Towards Resilient Analog In-Memory Deep Learning via Data Layout Re-Organization,\" in 59th Design Automation Conference (DAC), 2022 (Selected as a Publicity Paper)",
    "year": 2022,
    "link": "https://dl.acm.org/doi/abs/10.1145/3489517.3530532",
    "specialMention": "Selected as a Publicity Paper"
  },
  {
    "actualTitle": "Hybrid Digital-Digital In-Memory Computing",
    "citationDetails": "M Rashed,  SK Jha, F Yao and R Ewetz, \"Hybrid Digital-Digital In-Memory Computing,\" in 25th Design Automation and Test in Europe Conference (DATE), 2022",
    "year": 2022,
    "link": "https://ieeexplore.ieee.org/abstract/document/9774722"
  },
  {
    "actualTitle": "STREAM: Towards READ-based In-Memory Computing for Streaming based Data Processing",
    "citationDetails": "M Rashed,  S. Thijssen, F Yao, SK Jha, and R Ewetz, \"STREAM: Towards READ-based In-Memory Computing for Streaming based Data Processing,\" in 27th Asia and South Pacific Design Automation Conference (ASP-DAC), 2022",
    "year": 2022,
    "link": "https://ieeexplore.ieee.org/abstract/document/9712569"
  },
  {
    "actualTitle": "Hybrid Anlog-Digital In-Memory Computing",
    "citationDetails": "M Rashed,  SK Jha, and R Ewetz, \"Hybrid Anlog-Digital In-Memory Computing,\" in 40th International Conference On Computer Aided Design (ICCAD), 2021",
    "year": 2021,
    "link": "https://ieeexplore.ieee.org/abstract/document/9643526"
  },
  {
    "actualTitle": "LADDER: Architecting Content and Location-aware Writes for Crossbar Resistive Memories",
    "citationDetails": "M Chowdhuryy, M Rashed,  A Awad, R Ewetz, and F Yao, \"LADDER: Architecting Content and Location-aware Writes for Crossbar Resistive Memories,\" in 54th International Symposium on Microarchitecture (MICRO), 2021",
    "year": 2021,
    "link": "https://dl.acm.org/doi/abs/10.1145/3466752.3480054"
  }
];
export default publications;
