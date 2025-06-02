const resources = [
            {
                title: "Microsoft Learn",
                description: "Comprehensive learning platform with interactive modules, hands-on labs, and certification paths for all Microsoft technologies.",
                url: "https://learn.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "📚",
                category: "learning"
            },
            {
                title: "Copilot Learning Hub",
                description: "Master AI-powered productivity with Copilot across Microsoft 365, development environments, and business applications.",
                url: "https://learn.microsoft.com/copilot?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "🤖",
                category: "learning"
            },
            {
                title: "Microsoft Azure",
                description: "Cloud computing platform offering 200+ services including compute, analytics, storage, and networking solutions.",
                url: "https://azure.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "☁️",
                category: "cloud"
            },
            {
                title: "Blog Fabric",
                description: "Stay updated with the latest insights, updates, and best practices for Microsoft Fabric analytics platform.",
                url: "https://blog.fabric.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "📰",
                category: "cloud"
            },
            {
                title: "Microsoft Developer",
                description: "Complete developer ecosystem with tools, documentation, and resources for building modern applications.",
                url: "https://developer.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "👨‍💻",
                category: "development"
            },
            {
                title: ".NET Platform",
                description: "Free, cross-platform framework for building web, mobile, desktop, games, and IoT applications.",
                url: "https://dotnet.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "⚡",
                category: "development"
            },
            {
                title: "Microsoft Events",
                description: "Discover virtual and in-person events, conferences, workshops, and training sessions worldwide.",
                url: "https://events.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "📅",
                category: "community"
            },
            {
                title: "Imagine Cup",
                description: "Global student technology competition empowering the next generation to solve real-world challenges.",
                url: "https://imaginecup.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "🏆",
                category: "community"
            },
            {
                title: "MVP Program",
                description: "Most Valuable Professional program recognizing exceptional community leaders and technology experts.",
                url: "https://mvp.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "🌟",
                category: "community"
            },
            {
                title: "Microsoft Reactor",
                description: "Community spaces for developers, startups, and tech enthusiasts to learn, connect, and build together.",
                url: "https://reactor.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "🚀",
                category: "community"
            },
            {
                title: "Tech Community",
                description: "Connect with Microsoft technical communities, forums, and expert networks for knowledge sharing.",
                url: "https://techcommunity.microsoft.com/?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "👥",
                category: "community"
            },
            {
                title: "Microsoft for Startups",
                description: "Comprehensive startup program providing credits, technical support, and go-to-market resources.",
                url: "https://microsoft.com/startups?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "💡",
                category: "development"
            },
            {
                title: "Microsoft Cloud Blog",
                description: "Latest insights, announcements, and thought leadership on cloud computing and digital transformation.",
                url: "https://microsoft.com/microsoft-cloud/blog?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "📝",
                category: "cloud"
            },
            {
                title: "Microsoft Fabric",
                description: "All-in-one analytics solution combining data integration, engineering, warehousing, science, and business intelligence.",
                url: "https://microsoft.com/microsoft-fabric?WT.mc_id=academic&wt.mc_id=studentamb_465512",
                icon: "🔗",
                category: "cloud"
            }
        ];

        function createResourceCard(resource, index) {
            return `
                <div class="resource-card" data-category="${resource.category}" style="animation-delay: ${index * 0.1}s">
                    <div class="resource-icon">${resource.icon}</div>
                    <h3 class="resource-title">${resource.title}</h3>
                    <p class="resource-description">${resource.description}</p>
                    <a href="${resource.url}" class="resource-link" target="_blank" rel="noopener noreferrer">
                        Explore Resource →
                    </a>
                </div>
            `;
        }

        function renderResources(resourcesToShow = resources) {
            const grid = document.getElementById('resourcesGrid');
            grid.innerHTML = resourcesToShow.map((resource, index) => createResourceCard(resource, index)).join('');
            
            // Update resource count
            document.getElementById('resourceCount').textContent = resourcesToShow.length;
        }

        function filterResources(category) {
            const filteredResources = category === 'all' 
                ? resources 
                : resources.filter(resource => resource.category === category);
            renderResources(filteredResources);
        }

        function searchResources(query) {
            const filteredResources = resources.filter(resource => 
                resource.title.toLowerCase().includes(query.toLowerCase()) ||
                resource.description.toLowerCase().includes(query.toLowerCase())
            );
            renderResources(filteredResources);
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', () => {
            renderResources();
            
            // Category filters
            document.querySelectorAll('.category-filter').forEach(filter => {
                filter.addEventListener('click', (e) => {
                    document.querySelectorAll('.category-filter').forEach(f => f.classList.remove('active'));
                    e.target.classList.add('active');
                    filterResources(e.target.dataset.category);
                });
            });
            
            // Search functionality
            const searchInput = document.getElementById('searchInput');
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    const query = e.target.value.trim();
                    if (query) {
                        searchResources(query);
                        // Reset category filter
                        document.querySelectorAll('.category-filter').forEach(f => f.classList.remove('active'));
                    } else {
                        renderResources();
                        document.querySelector('.category-filter[data-category="all"]').classList.add('active');
                    }
                }, 300);
            });
        });

        // Add smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });