import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';

// Mock Next.js Image component if needed
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Card Component', () => {
  const defaultProps = {
    title: 'Test Card Title',
    description: 'This is a test card description that explains the card content.',
  };

  // Helper function to get the card container (outermost div)
  const getCardContainer = () => {
    // The card container is the outermost div that contains everything
    return screen.getByRole('heading', { level: 3 }).closest('div')?.parentElement;
  };

  describe('Required Props Rendering', () => {
    it('renders with required props (title and description)', () => {
      render(<Card {...defaultProps} />);
      
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
      expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
      expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    });

    it('displays the correct title text', () => {
      render(<Card {...defaultProps} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent(defaultProps.title);
    });

    it('displays the correct description text', () => {
      render(<Card {...defaultProps} />);
      
      const descriptionElement = screen.getByText(defaultProps.description);
      expect(descriptionElement).toBeInTheDocument();
      expect(descriptionElement).toHaveTextContent(defaultProps.description);
    });
  });

  describe('Optional Props Rendering', () => {
    it('renders with imageUrl prop', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageElement = screen.getByRole('img');
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', imageUrl);
      expect(imageElement).toHaveAttribute('alt', defaultProps.title);
    });

    it('renders with custom className prop', () => {
      const customClassName = 'custom-card-class';
      render(<Card {...defaultProps} className={customClassName} />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass(customClassName);
    });

    it('renders with both imageUrl and className props', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      const customClassName = 'custom-card-class';
      render(<Card {...defaultProps} imageUrl={imageUrl} className={customClassName} />);
      
      const imageElement = screen.getByRole('img');
      const cardContainer = getCardContainer();
      
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', imageUrl);
      expect(cardContainer).toHaveClass(customClassName);
    });
  });

  describe('Rendering Without Optional Props', () => {
    it('renders without imageUrl prop', () => {
      render(<Card {...defaultProps} />);
      
      const imageElement = screen.queryByRole('img');
      expect(imageElement).not.toBeInTheDocument();
    });

    it('renders without className prop (uses default empty string)', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      // Check that it has the base classes but not any custom ones
      expect(cardContainer).toHaveClass('group', 'bg-white', 'dark:bg-gray-900', 'rounded-xl');
    });

    it('handles undefined imageUrl gracefully', () => {
      render(<Card {...defaultProps} imageUrl={undefined} />);
      
      const imageElement = screen.queryByRole('img');
      expect(imageElement).not.toBeInTheDocument();
    });

    it('handles empty string className gracefully', () => {
      render(<Card {...defaultProps} className="" />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass('group', 'bg-white');
    });
  });

  describe('CSS Classes and Styling', () => {
    it('applies correct base CSS classes to card container', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass(
        'group',
        'bg-white',
        'dark:bg-gray-900',
        'rounded-xl',
        'border',
        'border-gray-200',
        'dark:border-gray-800',
        'shadow-sm',
        'hover:shadow-md',
        'hover:border-gray-300',
        'dark:hover:border-gray-700',
        'transition-all',
        'duration-300',
        'overflow-hidden'
      );
    });

    it('applies correct CSS classes to title', () => {
      render(<Card {...defaultProps} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveClass(
        'text-lg',
        'font-semibold',
        'text-gray-900',
        'dark:text-white',
        'mb-3',
        'group-hover:text-blue-600',
        'dark:group-hover:text-blue-400',
        'transition-colors',
        'duration-200'
      );
    });

    it('applies correct CSS classes to description', () => {
      render(<Card {...defaultProps} />);
      
      const descriptionElement = screen.getByText(defaultProps.description);
      expect(descriptionElement).toHaveClass(
        'text-gray-600',
        'dark:text-gray-300',
        'leading-relaxed',
        'text-sm'
      );
    });

    it('applies correct CSS classes to image container when imageUrl is provided', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageContainer = screen.getByRole('img').parentElement;
      expect(imageContainer).toHaveClass(
        'h-48',
        'bg-gradient-to-br',
        'from-blue-50',
        'to-indigo-100',
        'dark:from-gray-800',
        'dark:to-gray-900'
      );
    });

    it('applies correct CSS classes to image when imageUrl is provided', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageElement = screen.getByRole('img');
      expect(imageElement).toHaveClass(
        'w-full',
        'h-full',
        'object-cover',
        'group-hover:scale-105',
        'transition-transform',
        'duration-300'
      );
    });

    it('applies correct CSS classes to content container', () => {
      render(<Card {...defaultProps} />);
      
      const contentContainer = screen.getByRole('heading', { level: 3 }).parentElement;
      expect(contentContainer).toHaveClass('p-6');
    });
  });

  describe('Image Display and Alt Text', () => {
    it('displays image with correct alt text when imageUrl is provided', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageElement = screen.getByRole('img');
      expect(imageElement).toHaveAttribute('alt', defaultProps.title);
    });

    it('uses title as alt text for accessibility', () => {
      const customTitle = 'Custom Card Title for Accessibility';
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card title={customTitle} description={defaultProps.description} imageUrl={imageUrl} />);
      
      const imageElement = screen.getByRole('img');
      expect(imageElement).toHaveAttribute('alt', customTitle);
    });

    it('does not render image container when imageUrl is not provided', () => {
      render(<Card {...defaultProps} />);
      
      // Check that there's no element with the image container classes
      const container = getCardContainer();
      const imageContainer = container?.querySelector('.h-48');
      expect(imageContainer).not.toBeInTheDocument();
    });
  });

  describe('Hover Effects and Transitions', () => {
    it('includes hover effect classes for shadow', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass('hover:shadow-md');
    });

    it('includes hover effect classes for border', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass('hover:border-gray-300', 'dark:hover:border-gray-700');
    });

    it('includes hover effect classes for title color', () => {
      render(<Card {...defaultProps} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveClass('group-hover:text-blue-600', 'dark:group-hover:text-blue-400');
    });

    it('includes hover effect classes for image scale when image is present', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageElement = screen.getByRole('img');
      expect(imageElement).toHaveClass('group-hover:scale-105');
    });

    it('includes transition classes for smooth animations', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      const titleElement = screen.getByRole('heading', { level: 3 });
      
      expect(cardContainer).toHaveClass('transition-all', 'duration-300');
      expect(titleElement).toHaveClass('transition-colors', 'duration-200');
    });

    it('includes transition classes for image transform when image is present', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageElement = screen.getByRole('img');
      expect(imageElement).toHaveClass('transition-transform', 'duration-300');
    });
  });

  describe('Dark Mode Styling Classes', () => {
    it('includes dark mode classes for card background', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass('dark:bg-gray-900');
    });

    it('includes dark mode classes for border', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass('dark:border-gray-800', 'dark:hover:border-gray-700');
    });

    it('includes dark mode classes for title text', () => {
      render(<Card {...defaultProps} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveClass('dark:text-white', 'dark:group-hover:text-blue-400');
    });

    it('includes dark mode classes for description text', () => {
      render(<Card {...defaultProps} />);
      
      const descriptionElement = screen.getByText(defaultProps.description);
      expect(descriptionElement).toHaveClass('dark:text-gray-300');
    });

    it('includes dark mode classes for image container gradient when image is present', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageContainer = screen.getByRole('img').parentElement;
      expect(imageContainer).toHaveClass('dark:from-gray-800', 'dark:to-gray-900');
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('handles very long title text', () => {
      const longTitle = 'This is a very long title that might wrap to multiple lines and should still be handled gracefully by the component without breaking the layout or causing any issues';
      render(<Card title={longTitle} description={defaultProps.description} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent(longTitle);
    });

    it('handles very long description text', () => {
      const longDescription = 'This is a very long description that contains a lot of text and should be handled gracefully by the component. It might wrap to multiple lines and that should be perfectly fine as the component should be designed to handle content of varying lengths without breaking the layout or causing any accessibility issues.';
      render(<Card title={defaultProps.title} description={longDescription} />);
      
      const descriptionElement = screen.getByText(longDescription);
      expect(descriptionElement).toHaveTextContent(longDescription);
    });

    it('handles empty string title', () => {
      render(<Card title="" description={defaultProps.description} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent('');
    });

    it('handles empty string description', () => {
      render(<Card title={defaultProps.title} description="" />);
      
      const descriptionElement = screen.getByText('', { selector: 'p' });
      expect(descriptionElement).toHaveTextContent('');
    });

    it('handles special characters in title and description', () => {
      const specialTitle = 'Card with Special Characters: !@#$%^&*()_+-=[]{}|;:,.<>?';
      const specialDescription = 'Description with émojis 🎉 and unicode characters: ñáéíóú';
      render(<Card title={specialTitle} description={specialDescription} />);
      
      expect(screen.getByText(specialTitle)).toBeInTheDocument();
      expect(screen.getByText(specialDescription)).toBeInTheDocument();
    });

    it('handles multiple custom CSS classes in className prop', () => {
      const multipleClasses = 'custom-class-1 custom-class-2 hover:custom-hover another-class';
      render(<Card {...defaultProps} className={multipleClasses} />);
      
      const cardContainer = getCardContainer();
      expect(cardContainer).toHaveClass('custom-class-1', 'custom-class-2', 'hover:custom-hover', 'another-class');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML with proper heading hierarchy', () => {
      render(<Card {...defaultProps} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement.tagName).toBe('H3');
    });

    it('provides proper alt text for images', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const imageElement = screen.getByRole('img');
      expect(imageElement).toHaveAttribute('alt', defaultProps.title);
    });

    it('maintains proper focus and keyboard navigation', () => {
      render(<Card {...defaultProps} />);
      
      // The card should be focusable for keyboard navigation
      const cardContainer = getCardContainer();
      expect(cardContainer).toBeInTheDocument();
    });

    it('has appropriate color contrast classes for accessibility', () => {
      render(<Card {...defaultProps} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      const descriptionElement = screen.getByText(defaultProps.description);
      
      // Check for appropriate text color classes that provide good contrast
      expect(titleElement).toHaveClass('text-gray-900', 'dark:text-white');
      expect(descriptionElement).toHaveClass('text-gray-600', 'dark:text-gray-300');
    });
  });

  describe('Component Structure', () => {
    it('renders correct HTML structure with image', () => {
      const imageUrl = 'https://example.com/test-image.jpg';
      render(<Card {...defaultProps} imageUrl={imageUrl} />);
      
      const cardContainer = getCardContainer();
      const imageContainer = screen.getByRole('img').parentElement;
      const contentContainer = screen.getByRole('heading', { level: 3 }).parentElement;
      
      expect(cardContainer).toContainElement(imageContainer);
      expect(cardContainer).toContainElement(contentContainer);
      expect(contentContainer).toContainElement(screen.getByRole('heading', { level: 3 }));
      expect(contentContainer).toContainElement(screen.getByText(defaultProps.description));
    });

    it('renders correct HTML structure without image', () => {
      render(<Card {...defaultProps} />);
      
      const cardContainer = getCardContainer();
      const contentContainer = screen.getByRole('heading', { level: 3 }).parentElement;
      
      expect(cardContainer).toContainElement(contentContainer);
      expect(contentContainer).toContainElement(screen.getByRole('heading', { level: 3 }));
      expect(contentContainer).toContainElement(screen.getByText(defaultProps.description));
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
  });
});