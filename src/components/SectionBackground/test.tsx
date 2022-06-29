import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground, SectionBackgroundProps } from '.';

const props: SectionBackgroundProps = {
  children: 'Texto',
};
describe('<SectionBackground />', () => {
  it('should render SectionBackground', () => {
    renderTheme(<SectionBackground {...props} />);

    expect(screen.getByText('Texto')).toBeInTheDocument();
  });
});
