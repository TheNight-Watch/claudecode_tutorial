import { COMPONENT_GENERATION_PROMPT } from '../generation';

describe('COMPONENT_GENERATION_PROMPT', () => {
  it('should be a non-empty string', () => {
    expect(COMPONENT_GENERATION_PROMPT).toBeDefined();
    expect(typeof COMPONENT_GENERATION_PROMPT).toBe('string');
    expect(COMPONENT_GENERATION_PROMPT.length).toBeGreaterThan(0);
  });

  it('should contain React/TypeScript guidelines', () => {
    expect(COMPONENT_GENERATION_PROMPT).toContain('React/TypeScript');
    expect(COMPONENT_GENERATION_PROMPT).toContain('TypeScript');
    expect(COMPONENT_GENERATION_PROMPT).toContain('React');
  });

  it('should contain styling guidelines', () => {
    expect(COMPONENT_GENERATION_PROMPT).toContain('Tailwind CSS');
    expect(COMPONENT_GENERATION_PROMPT).toContain('responsive design');
    expect(COMPONENT_GENERATION_PROMPT).toContain('dark theme');
  });

  it('should contain component structure guidelines', () => {
    expect(COMPONENT_GENERATION_PROMPT).toContain('reusable');
    expect(COMPONENT_GENERATION_PROMPT).toContain('accessibility');
    expect(COMPONENT_GENERATION_PROMPT).toContain('semantic HTML');
  });

  it('should contain design principles', () => {
    expect(COMPONENT_GENERATION_PROMPT).toContain('modern');
    expect(COMPONENT_GENERATION_PROMPT).toContain('Interactive elements');
    expect(COMPONENT_GENERATION_PROMPT).toContain('animations');
  });

  it('should have proper formatting with sections', () => {
    expect(COMPONENT_GENERATION_PROMPT).toContain('## Code Quality Standards');
    expect(COMPONENT_GENERATION_PROMPT).toContain('## Styling Guidelines');
    expect(COMPONENT_GENERATION_PROMPT).toContain('## Component Structure');
    expect(COMPONENT_GENERATION_PROMPT).toContain('## Design Principles');
  });

  it('should contain specific technical requirements', () => {
    expect(COMPONENT_GENERATION_PROMPT).toContain('TypeScript');
    expect(COMPONENT_GENERATION_PROMPT).toContain('hooks');
    expect(COMPONENT_GENERATION_PROMPT).toContain('ARIA');
    expect(COMPONENT_GENERATION_PROMPT).toContain('mobile-first');
  });

  it('should be properly formatted with line breaks', () => {
    const lines = COMPONENT_GENERATION_PROMPT.split('\n');
    expect(lines.length).toBeGreaterThan(10); // Should have multiple lines
  });

  it('should not contain any placeholder text', () => {
    expect(COMPONENT_GENERATION_PROMPT).not.toContain('TODO');
    expect(COMPONENT_GENERATION_PROMPT).not.toContain('FIXME');
    expect(COMPONENT_GENERATION_PROMPT).not.toContain('XXX');
  });
});
