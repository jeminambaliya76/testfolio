import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
 {
  title: 'SmokeStore',
  description:
    'Designed and developed a custom e-commerce website for Excite Smoke, a retail brand specializing in smoke and vape products. The site features dynamic product listings such as bestsellers and featured items, promotional banners, and optimized call-to-actions to drive conversions. Integrated trust signals including authenticity badges and money-back guarantees, mobile-first design, and social media engagement features like Instagram-style product showcases and hashtag integration. Included newsletter signup and store location details to support brand outreach and community growth.',
  techStack: [
    'WooCommerce',
    'WordPress',
    'HTML5',
    'CSS3',
    'JavaScript',
    'PHP',
    'Responsive Design',
    'UI/UX Design',
    'Custom Theme Development',
    'Conversion Optimization',
    'Ecommerce Architecture'
  ],
  date: '2024',
  images: [
    {
      src: '/smoke1.jpg',
      alt: 'Excite Smoke homepage view with featured products',
    },
    {
      src: '/smoke2.jpg',
      alt: 'Product category layout with filters and promotions',
    },
    {
      src: '/smoke3.jpg',
      alt: 'Mobile responsive version of Excite Smoke site',
    },
    {
      src: '/smoke4.jpg',
      alt: 'Instagram-style user showcase and social feed integration',
    },
  ],
},{
  title: 'CustomWebsite',
  description:
    'I designed and developed a high-performance website for Big Doors and Windows, a leading Canadian supplier of European-style doors and windows. The goal was to showcase premium products through a sleek, modern design that communicates trust and quality. I implemented a fully responsive layout, optimized performance, and followed SEO best practices. The result is a professional, scalable platform that supports brand growth and builds customer confidence.',
  techStack: [
    'Next.js',
    'Tailwind CSS',
    'Responsive Design',
    'UI/UX Prototyping',
    'SEO Performance Optimization',
    'Full Stack Development',
    'Product Showcase Architecture',
    'Modern Design Aesthetics'
  ],
  date: '2024',
  images: [
    {
      src: '/bigdoor1.jpg',
      alt: 'Homepage of Big Doors and Windows with elegant door showcase',
    },
    {
      src: '/bigdoor2.jpg',
      alt: 'Product detail section highlighting premium European-style doors',
    },
    {
      src: '/bigdoor3.jpg',
      alt: 'Responsive design layout on tablet and mobile devices',
    },
    {
      src: '/bigdoor4.jpg',
      alt: 'Clean and modern UI emphasizing trust and quality',
    },
  ],
},
{
  title: 'TrendySmartTech',
  description:
    'Developed a vibrant, high-converting e-commerce website for Trendy Smart Tech, a lifestyle brand specializing in curated tech and innovation products. The platform supports multiple product categories, including gaming, beauty gadgets, and home tech. Focused on creating a seamless user experience through intuitive category navigation, advanced product filtering, mobile-first responsiveness, and stylish promotional banners. Built with scalability and performance in mind to support rapid inventory growth and customer engagement initiatives.',
  techStack: [
    'Shopify',
    'Liquid',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Design',
    'UX/UI Design',
    'Theme Customization',
    'Product Filtering',
    'Performance Optimization',
    'Ecommerce Strategy'
  ],
  date: '2024',
  images: [
    {
      src: '/trendytech1.jpg',
      alt: 'Trendy Smart Tech homepage with lifestyle tech banners',
    },
    {
      src: '/trendytech2.jpg',
      alt: 'Product grid with filters for categories like gaming and beauty',
    },
    {
      src: '/trendytech3.jpg',
      alt: 'Mobile-optimized layout showing product cards and menu',
    },
    {
      src: '/trendytech4.jpg',
      alt: 'Promotional sections for trending products and offers',
    },
  ],
},{
  title: 'TecSolution',
  description:
    'Built a corporate B2B website for TEC Solutions Group, an established packaging and manufacturing company with over 25 years in the industry. The site was designed to emphasize their full-service offerings, including Just-in-Time packaging, logistics, industrial consulting, and custom manufacturing. Delivered a clean, modern layout focused on credibility, ease of navigation, and lead generation through strategically placed contact forms. The platform enhances client trust, streamlines information delivery, and supports long-term business partnerships.',
  techStack: [
    'WordPress',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Design',
    'UX/UI Design',
    'Theme Customization',
    'Contact Form Integration',
    'SEO Basics',
    'B2B Web Strategy'
  ],
  date: '2024',
  images: [
    {
      src: '/tec1.jpg',
      alt: 'TEC Solutions Group homepage with clean industrial design',
    },
    {
      src: '/tec2.jpg',
      alt: 'Service breakdown section showcasing packaging and logistics',
    },
    {
      src: '/tec3.jpg',
      alt: 'Responsive mobile view with navigation and contact access',
    },
    {
      src: '/tec4.jpg',
      alt: 'Conversion-driven contact form and partner inquiry page',
    },
  ],
},{
  title: 'PriorityAdmission',
  description:
    'Developed a responsive and student-centric consulting platform for Priority Admission, an educational firm that has supported over 5,000 students in starting their academic journey in Canada. The site presents services such as university and college admissions, PSW (Personal Support Worker) programs, and career counseling. Focused on SEO optimization, multilingual support, and dynamic lead capture components to increase visibility and credibility among international students. Structured content delivery makes information easily accessible while enhancing engagement and conversion.',
  techStack: [
    'React',
    'Spring Boot',
    'HTML5',
    'CSS3',
    'Responsive Design',
    'SEO Optimization',
    'Multilingual Support',
    'Lead Capture Integration',
    'User-Centered Design',
    'Education Tech',
    'Web Development'
  ],
  date: '2024',
  images: [
    {
      src: '/priority1.jpg',
      alt: 'Priority Admission homepage with consulting highlights',
    },
    {
      src: '/priority2.jpg',
      alt: 'Service section showing college admissions and PSW programs',
    },
    {
      src: '/priority3.jpg',
      alt: 'Responsive view of student consulting platform on mobile',
    },
    {
      src: '/priority4.jpg',
      alt: 'Lead capture form and multilingual content interface',
    },
  ],
},{
  title: 'TouchAbroad',
  description:
    'Built a modern, UX-focused web platform for Touch Abroad Educational Services, a Canada-based consultancy that assists international students with their academic planning and admissions process. The site was designed to be clean, informative, and student-friendly, highlighting core services such as university partnerships, admissions counseling, and program selection. Developed responsive layouts, dynamic consultation forms, and university listing sections to ensure accessibility across devices. Performance and trust-building were central to driving engagement and inquiries.',
  techStack: [
    'Next.js',
    'Spring Boot',
    'Tailwind CSS',
    'HTML5',
    'Responsive Design',
    'UX/UI Design',
    'API Integration',
    'Education-Focused UX',
    'Performance Optimization',
    'Consulting Platform Development'
  ],
  date: '2024',
  images: [
    {
      src: '/touchabroad1.jpg',
      alt: 'Touch Abroad homepage with student-focused messaging',
    },
    {
      src: '/touchabroad2.jpg',
      alt: 'University listings and program selection section',
    },
    {
      src: '/touchabroad3.jpg',
      alt: 'Responsive mobile design showcasing consultation flow',
    },
    {
      src: '/touchabroad4.jpg',
      alt: 'Contact and consultation booking interface',
    },
  ],
},{
  title: 'Aquarium',
  description:
    'Developed a fully responsive and visually engaging website for Bobby G’s Pro Aquarium, an aquatic retail and education platform backed by over 45 years of expertise. The project focused on blending modern design with dynamic functionality to serve both retail customers and hobbyist learners. I built interactive sections for product categories, educational content, and visual showcases of aquatic life. The site supports seamless browsing across devices and positions the brand as both a go-to shop and trusted knowledge source for aquarium enthusiasts.',
  techStack: [
    'React',
    'Tailwind CSS',
    'HTML5',
    'Responsive Design',
    'UX/UI Design',
    'Dynamic Content Integration',
    'SEO Performance Optimization',
    'Retail + Educational Architecture',
    'Category Display Design',
    'Ecommerce UX'
  ],
  date: '2024',
  images: [
    {
      src: '/aquiam1.jpg',
      alt: 'Bobby G’s Pro Aquarium homepage with featured aquatic content',
    },
    {
      src: '/aquiam2.jpg',
      alt: 'Dynamic product section for fish, tanks, and accessories',
    },
    {
      src: '/aquiam3.jpg',
      alt: 'Mobile-responsive view with optimized navigation',
    },
    {
      src: '/aquiam4.jpg',
      alt: 'Educational content section with aquarium tips and guides',
    },
  ],
},
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {/* {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )} */}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'SmokeStore',
    title: 'SmokeStore',
    src: '/smoke1.jpg',
    content: <ProjectContent project={{ title: 'SmokeStore' }} />,
  },
  {
    category: 'CustomWebsite',
    title: 'CustomWebsite',
    src: '/bigdoor1.jpg',
    content: <ProjectContent project={{ title: 'CustomWebsite' }} />,
  },
  {
    category: 'TrendySmartTech',
    title: 'TrendySmartTech',
    src: '/trendytech1.jpg',
    content: <ProjectContent project={{ title: 'TrendySmartTech' }} />,
  },
  {
    category: 'TecSolution',
    title: 'TecSolution',
    src: '/tec1.jpg',
    content: <ProjectContent project={{ title: 'TecSolution' }} />,
  },
  {
    category: 'PriorityAdmission',
    title: 'PriorityAdmission',
    src: '/priority1.jpg',
    content: <ProjectContent project={{ title: 'PriorityAdmission' }} />,
  },
  {
    category: 'TouchAbroad',
    title: 'TouchAbroad',
    src: '/touchabroad1.jpg',
    content: <ProjectContent project={{ title: 'TouchAbroad' }} />,
  },
  {
    category: 'Aquarium',
    title: 'Aquarium',
    src: '/aquiam1.jpg',
    content: <ProjectContent project={{ title: 'Aquarium' }} />,
  }
];
