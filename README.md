This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Docker

# Create the image
```bash
docker build -t nextjs-first-steps .
```

# Create and run the container
```bash
docker container run -dp 3000:3000 nextjs-first-steps
```
