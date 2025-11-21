## Demo Platform: Component-Driven Architecture

A multi-repository platform showcasing modern web development with shared component systems, centralized design tokens, and microservice architecture. Built to demonstrate scalable frontend architecture patterns and cross-project component reuse.

<details>
<summary><strong>View Technical Details</strong></summary>

<div align="center">
  <img src="https://a.storyblok.com/f/287776322113402/784x811/8da7cc1cf9/system-architecture.png" alt="System Architecture" />
</div>

### Architecture Overview

The platform consists of interconnected repositories sharing a common design system:

- **Monorepo Design System** - Centralized component library published to GitHub Packages
- **Content Sites** - Two Next.js applications consuming the shared components
- **Cloud Services** - AWS Lambda functions for email and serverless functionality

### Live Projects

| Project | URL | Purpose |
|---------|-----|---------|
| Blog | [gotpop.io](https://gotpop.io) | Personal blog with Storyblok CMS |
| Portfolio | [work.gotpop.io](https://work.gotpop.io) | Professional work showcase |
| Storybook | [storybook.gotpop.io](https://storybook.gotpop.io) | Component documentation |

### Technical Stack

**Frontend**: Next.js 16, TypeScript, React Server Components  
**CMS**: Storyblok with multi-tenant content structure  
**Design System**: Turbo monorepo with published component packages  
**Infrastructure**: AWS (EC2, Lambda, SES), Docker containerization  
**CI/CD**: GitHub Actions with automated deployment pipelines

The architecture enables component reuse across projects while maintaining independent deployment cycles and content management.

</details>
