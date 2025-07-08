# React Spreadsheet Application

A pixel-perfect recreation of a project management spreadsheet interface, built as part of a React internship assignment. This application replicates the exact design and functionality shown in the provided Figma mockup.

[Spreadsheet Preview](https://spreadsheetapplication.netlify.app)

## 🎯 Assignment Overview

This project was built to demonstrate proficiency in React development by creating a static, front-end-only prototype that visually matches a specific Figma design for a spreadsheet-style project management interface.

### Original Figma Design
- **Figma URL**: [Intern Design Assignment](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1)

## ✨ Features

### Core Functionality
- **Pixel-perfect UI** matching the Figma design
- **Google Sheets/Excel-like interface** with proper grid layout
- **Interactive project management** with task tracking
- **Status management** with color-coded badges
- **User assignment** with avatar displays
- **Priority levels** with visual indicators
- **Budget tracking** with formatted currency
- **Tab navigation** for different views

### Interactive Elements
- ✅ Cell selection and highlighting
- ✅ Checkbox interactions for bulk actions
- ✅ Status badge displays (Not started, In progress, Completed, Blocked)
- ✅ Priority indicators (High, Medium, Low)
- ✅ User avatars with initials
- ✅ Action buttons with hover states
- ✅ Tab switching (All Orders, Pending, Reviewed, Arrived)
- ✅ All buttons log interactions to console

### Design Highlights
- **Responsive layout** optimized for desktop spreadsheet workflow
- **Professional styling** with proper spacing and typography
- **Color-coded status system** for quick visual scanning
- **Clean, modern interface** matching industry standards
- **Hover effects** and micro-interactions for better UX

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Full type safety in strict mode
- **Vite** - Fast development and build tooling
- **Tailwind CSS** - Utility-first styling framework
- **Lucide React** - Beautiful, customizable icons
- **Custom Grid Component** - Purpose-built for spreadsheet functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-spreadsheet-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Top navigation bar
│   ├── Spreadsheet.tsx         # Main container component
│   ├── ProjectSpreadsheet.tsx  # Spreadsheet grid and toolbar
│   └── ProjectRow.tsx          # Individual project row component
├── hooks/
│   └── useSpreadsheet.ts       # Custom hook for spreadsheet logic
├── App.tsx                     # Root application component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🎨 Design Decisions

### Component Architecture
- **Modular design** with single-responsibility components
- **Custom hooks** for state management and business logic
- **TypeScript interfaces** for type safety and better developer experience
- **Separation of concerns** between UI and data logic

### Styling Approach
- **Tailwind CSS** for rapid, consistent styling
- **Utility-first** approach for maintainable CSS
- **Custom color system** matching the Figma design
- **Responsive design** principles for various screen sizes

### Why Custom Grid Instead of react-table?
1. **Performance** - Direct control over rendering for large datasets
2. **Flexibility** - Easier to implement spreadsheet-specific features
3. **Bundle size** - Smaller footprint without unnecessary table features
4. **Design control** - Perfect pixel matching with Figma requirements

## ✅ Assignment Requirements Met

### Core Criteria
- [x] **Pixel-perfect layout** matching the Figma design
- [x] **Google Sheet/Excel-like experience** with proper grid functionality
- [x] **Interactive elements** - all buttons and tabs change state or log to console
- [x] **Code quality** - passes `npm run lint` and `npm run type-check`
- [x] **TypeScript strict mode** with full type safety
- [x] **Clean component structure** with proper separation of concerns

### Technical Standards
- [x] **React 18** with modern hooks and patterns
- [x] **TypeScript** in strict mode
- [x] **Tailwind CSS** for styling
- [x] **No dead UI** - all interactive elements are functional
- [x] **Console logging** for all button interactions
- [x] **Responsive design** optimized for desktop use

## 🔮 Future Enhancements

### Stretch Goals (Optional)
- [ ] **Keyboard navigation** with arrow keys between cells
- [ ] **Column resize** functionality with drag handles
- [ ] **Column hide/show** toggles
- [ ] **Real data persistence** with local storage
- [ ] **Advanced filtering** and sorting capabilities
- [ ] **Export functionality** to CSV/Excel formats

### Potential Improvements
- [ ] **Formula support** for calculations
- [ ] **Collaborative editing** with real-time updates
- [ ] **Advanced cell formatting** options
- [ ] **Drag and drop** for task reordering
- [ ] **Mobile optimization** for tablet/phone use

## 🧪 Testing

The application includes comprehensive interaction testing:

```bash
# All interactive elements log to browser console
# Test by clicking any button, tab, or cell
# Check browser DevTools console for logged interactions
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
The `dist` folder contains the production build ready for deployment to any static hosting service.

## 📝 Trade-offs and Considerations

### Performance Optimizations
- **Custom grid implementation** instead of heavy table libraries
- **Minimal re-renders** with proper React patterns
- **Efficient state management** using built-in React hooks

### Development Speed vs. Flexibility
- **Tailwind CSS** chosen for rapid development while maintaining design consistency
- **TypeScript** adds development overhead but ensures code reliability
- **Custom components** provide flexibility at the cost of initial development time

### Browser Compatibility
- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **ES2020+ features** used throughout the codebase
- **CSS Grid and Flexbox** for layout (IE11+ support)

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design provided by the internship assignment
- Built with modern React and TypeScript best practices
- Styled with Tailwind CSS for rapid development
- Icons provided by Lucide React

---

**Live Demo**: [Add your deployed URL here]  
**Repository**: [Add your GitHub repository URL here]

Built with ❤️ for the React Internship Assignment
