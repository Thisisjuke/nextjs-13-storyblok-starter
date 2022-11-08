import type { ErrorDisplayProps } from './ErrorDisplay'
import { ErrorDisplay } from './ErrorDisplay'

const defaultArgs = {
  errorCode: '404',
  title: 'Page non trouvée',
  hint: 'Veuillez vérifier l\'URL dans la barre d\'adresse et réessayer.',
  ctaText: 'Retourner sur la page d\'accueil',
  ctaUrl: '/',
}

export default {
  title: 'Components/Organisms/ErrorDisplay',
  component: ErrorDisplay,
}

export const Default = (args: ErrorDisplayProps) => <ErrorDisplay {...args} />
Default.args = {
  ...defaultArgs,
}
