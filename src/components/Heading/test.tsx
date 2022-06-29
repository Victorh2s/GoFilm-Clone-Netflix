import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Example</Heading>);
    const heading = screen.getByRole('heading', { name: 'Example' });

    expect(heading).toHaveStyle({
      color: theme.colors.dark,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with dark false and uppercase true', () => {
    renderTheme(
      <Heading colorDark={false} uppercase={true}>
        Example
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Example' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Example</Heading>);
    const heading = screen.getByRole('heading', { name: 'Example' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Example</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Example' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Example</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Example' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Example</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Example' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="small">Example</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Example' })).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(
      <Heading colorDark={false} uppercase={true}>
        Example
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Example' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.large, {
      media: theme.media.lteMedium,
    });
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<Heading>Example</Heading>);

    expect(container).toMatchSnapshot();
  });
});
