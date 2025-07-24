/*
 * MANUAL PROJECT ENTRY GUIDE:
 * 
 * To add a new project, simply add a new object to this array.
 * Each project should have:
 * - title: The name/title of the project
 * - briefDescription: A short summary of the project
 * - fullDescription: Detailed description of the project
 * - links: Array of links to papers, venues, or related resources
 * - images: Array of image URLs (can be single image for now)
 * 
 * Template:
 * {
 *   "title": "Your Project Title",
 *   "briefDescription": "Short summary of the project",
 *   "fullDescription": "Detailed description of the project including methodology, results, and impact",
 *   "links": [
 *     {
 *       "label": "Paper",
 *       "url": "https://doi.org/your-paper-link"
 *     },
 *     {
 *       "label": "GitHub",
 *       "url": "https://github.com/your-repo"
 *     }
 *   ],
 *   "images": ["/images/projects/project1.jpg"]
 * }
 */

const projects = [
    {
        "title": "Design Automation of In-Memory Computing",
        "briefDescription": "Design and optimization of in-memory computing systems for efficient execution of data-intensive workloads.",
        "fullDescription": "This research focuses on developing a fully automated synthesis framework that maps computational tasks efficiently onto in-memory architectures. By eliminating manual, sub-optimal design choices and introducing end-to-end automation and optimization strategies, the framework significantly improves performance and energy efficiency. This work contributes to the broader goal of enabling scalable, high-performance computing for next-generation data-driven applications.",
        "links": [
             {
                "label": "Paper2",
                "url": "https://dl.acm.org/doi/10.1145/3649329.3657348"
            },
            {
                "label": "Paper1",
                "url": "https://dl.acm.org/doi/10.1145/3711848"
            },
            {
                "label": "Paper2",
                "url": "https://ieeexplore.ieee.org/document/10323667"
            },
            {
                "label": "Paper3",
                "url": "https://dl.acm.org/doi/10.1145/3508352.3549348"
            }
        ],
        "images": ["/images/projects/Computer-Aided-Design.jpg"]
    },
    {
        "title": "Resilient and Robust AI Systems",
        "briefDescription": "High-performance streaming data processing using in-memory computing architectures",
        "fullDescription": "STREAM addresses the growing need for real-time data processing by implementing streaming-based computation directly in memory. This project develops specialized hardware accelerators that can process continuous data streams with minimal latency. The system supports various streaming algorithms including filtering, aggregation, and pattern matching. Our experimental results show 5x throughput improvement and 3x latency reduction compared to CPU-based streaming systems. The project includes both FPGA and ASIC implementations.",
        "links": [
            {
                "label": "Paper1",
                "url": "https://dl.acm.org/doi/abs/10.1145/3489517.3530532"
            },
            {
                "label": "Paper2",
                "url": "https://dl.acm.org/doi/abs/10.1145/3466752.3480054"
            }
        ],
        "images": ["/images/projects/Resilient-and-Robust-AI-Systems.png"]
    },
    {
        "title": "Hybrid Computing",
        "briefDescription": "Automated synthesis tools for digital in-memory computing circuits",
        "fullDescription": "LOGIC is a comprehensive synthesis framework that automatically generates optimized digital in-memory computing circuits from high-level specifications. The tool supports various logic families and optimization objectives including area, power, and performance. Our synthesis engine uses advanced algorithms to explore the design space and find optimal implementations. The project includes a complete toolchain from RTL to GDSII, with support for multiple technology nodes. Experimental results demonstrate 40% area reduction and 30% power improvement compared to manual designs.",
        "links": [
            {
                "label": "Paper1",
                "url": "https://ieeexplore.ieee.org/abstract/document/9643526"
            },
            {
                "label": "Paper2",
                "url": "https://ieeexplore.ieee.org/abstract/document/9774722"
            }
        ],
        "images": ["/images/projects/Hybrid-Computing.png"]
    },
    {
        "title": "Novel Architecture Design",
        "briefDescription": "Combining analog and digital computing paradigms for optimal performance",
        "fullDescription": "This project explores the synergy between analog and digital in-memory computing by developing hybrid architectures that leverage the strengths of both approaches. Analog computing provides high energy efficiency for certain operations, while digital computing offers precision and programmability. Our hybrid system dynamically switches between analog and digital modes based on the computational requirements. The project includes novel circuit designs, control algorithms, and system-level optimization techniques. Results show 2x energy efficiency improvement while maintaining digital precision levels.",
        "links": [
            {
                "label": "Paper1",
                "url": "https://ieeexplore.ieee.org/abstract/document/10323622"
            },
            {
                "label": "Paper2",
                "url": "https://ieeexplore.ieee.org/abstract/document/10089867"
            },
            {
                "label": "Paper3",
                "url": "https://ieeexplore.ieee.org/abstract/document/10361011"
            },
            {
                "label": "Paper4",
                "url": "https://ieeexplore.ieee.org/abstract/document/10247692"
            },
            {
                "label": "Paper5",
                "url": "https://ieeexplore.ieee.org/abstract/document/9712569"
            }
        ],
        "images": ["/images/projects/Novel-Architecture-Design.png"]
    },
    {
        "title": "AI-Aided Synthesis and Verification",
        "briefDescription": "Deployment of AI to explore new frontiers of EDA solutions",
        "fullDescription": "This project aims to create new algorithms and synthesis flows using AI. Many synthesis and verification problems within emerging computing systems are limited by sub-optimal solutions. AI-aided design explorations can lead to new and improved solutions to these problems. This research direction promises breakthroughs for many sub-optimal solutions where we today rely on human expertise to perform design.",
        "links": [
            {
                "label": "Paper",
                "url": "https://ieeexplore.ieee.org/document/10670630"
            },
        ],
        "images": ["/images/projects/AI-Aided-Synthesis-and-Verification1.jpg"]
    }
];

export default projects;

// EXAMPLE: How to add a new project (uncomment and modify as needed):
// {
//   "title": "Your New Project Title",
//   "briefDescription": "Short summary of your project",
//   "fullDescription": "Detailed description of your project including methodology, results, and impact",
//   "links": [
//     {
//       "label": "Paper",
//       "url": "https://doi.org/your-paper-link"
//     },
//     {
//       "label": "GitHub",
//       "url": "https://github.com/your-repo"
//     },
//     {
//       "label": "Demo",
//       "url": "https://your-demo-link"
//     }
//   ],
//   "images": ["/images/projects/your-project-image.jpg"]
// } 
