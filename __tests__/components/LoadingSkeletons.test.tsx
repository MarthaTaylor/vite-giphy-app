import { render, screen } from '@testing-library/react';
import LoadingSkeletons from '../../src/components/Skeleton';
import { describe, it, expect } from 'vitest';

describe('LoadingSkeletons Component', () => {
  it('should render 8 skeleton boxes', () => {
    render(<LoadingSkeletons />);

    // expect 8 SkeletonBox elements to be rendered
    const skeletonBoxes = screen.getAllByRole('progressbar');
    expect(skeletonBoxes).toHaveLength(8); // Expecting 6 skeleton boxes
  });

  it('should have appropriate aria-label and role attributes for accessibility', () => {
    render(<LoadingSkeletons />);

    // Check  correct role and aria-label on the first skeleton box
    const skeletonBox = screen.getByLabelText('Loading skeleton 1');
    expect(skeletonBox).toHaveAttribute('role', 'progressbar');
    expect(skeletonBox).toHaveAttribute('aria-label', 'Loading skeleton 1');
  });

});
