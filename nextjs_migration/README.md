# KGEC Robotics Society Website Migration (Next.js)

## Current State
- All essential frontend files (views, UI components, shared/layout, types, API utilities, global CSS, Tailwind/PostCSS configs) have been copied to the `nextjs_migration` folder.
- The code is still in the structure of a Vite + React project, not yet adapted for Next.js.
- No Next.js project has been initialized yet.

## What To Do Next
1. **Initialize a new Next.js project** in this folder (or move these files into a new Next.js app).
2. **Move/rename files** into the correct Next.js structure (`pages` or `app` directory).
3. **Update routing:** Replace `react-router-dom` with Next.js file-based routing.
4. **Update environment variables:** Change `import.meta.env` to `process.env.NEXT_PUBLIC_...` in API utilities.
5. **Update imports** as needed for Next.js conventions.
6. **Install dependencies:** Install all required packages (React, Next.js, Tailwind, Framer Motion, etc.).
7. **Test and refactor** each page/component for Next.js compatibility.

---

## Changes Needed for Website (as per user requirements)
1. Change colour of nav bar and buttons (do not make them colorful).
2. Add padding in the center of the heading “ROBOTICS SOCIETY”.
3. Change the cursor design.
4. Change ‘Upcoming events’ to only ‘Events with date’ (sort by most recent).
5. Keep two Mega Projects above and make all other projects as small boxes.
6. Show some team members on the Home page with a "View More" option to jump to the Team page.
7. Keep Faculty as part of the Team section.
8. Add a 3D element (start with SVG first).
9. Use the color scheme provided by Tanmay da (Purple).

---

**Please follow the above steps and implement the listed changes during the migration and redesign process.**
