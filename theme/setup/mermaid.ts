import { defineMermaidSetup } from '@slidev/types'

// Match Mermaid's default palette to the DevSeed brand colors in styles/index.css
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    primaryColor: '#f5f3f2',
    primaryTextColor: '#443f3f',
    primaryBorderColor: '#cf3f02',
    secondaryColor: '#ffffff',
    tertiaryColor: '#f5f3f2',
    lineColor: '#565b65',
    textColor: '#443f3f',
    // sequence diagrams
    actorBkg: '#f5f3f2',
    actorBorder: '#cf3f02',
    actorTextColor: '#443f3f',
    signalColor: '#565b65',
    signalTextColor: '#443f3f',
    labelBoxBkgColor: '#cf3f02',
    labelBoxBorderColor: '#cf3f02',
    labelTextColor: '#ffffff',
    noteBkgColor: '#e2c044',
    noteBorderColor: '#e2c044',
  },
}))
