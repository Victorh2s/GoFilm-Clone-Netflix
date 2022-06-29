import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer, SectionContainerProps } from '.';

const props: SectionContainerProps = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illo possimus minus aliquid nemo minima, doloribus harum eius sint recusandae alias eum rerum ab neque et, blanditiis, molestiae exercitationem quas?',
};

describe('<SectionContainer />', () => {
  it('should render', () => {
    renderTheme(<SectionContainer {...props} />);

    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<SectionContainer {...props} />);

    expect(container).toMatchSnapshot();
  });
});
