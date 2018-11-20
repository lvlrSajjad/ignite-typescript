// Ignite plugin for Typescript
// ----------------------------------------------------------------------------
// const PLUGIN_PATH = __dirname
const APP_PATH = process.cwd()

const add = async function (context) {
  const { ignite, print } = context

  await ignite.addModule('typescript', {dev: true })
  await ignite.addModule('@types/jest', { dev: true })
  await ignite.addModule('@types/react', { dev: true })
  await ignite.addModule('@types/react-native', { dev: true })
  await ignite.addModule('react-addons-test-utils', { dev: true })
  await ignite.addModule('@types/react-test-renderer', { dev: true })
  await ignite.addModule('react-native-typescript-transformer', { dev: true })

  print.info('done')
}

/**
 * Remove from the project.
 */
const remove = async function (context) {
  const { ignite } = context

  await ignite.removeModule('typescript', {dev: true })
  await ignite.removeModule('@types/jest', { dev: true })
  await ignite.removeModule('@types/react', { dev: true })
  await ignite.removeModule('@types/react-native', { dev: true })
  await ignite.removeModule('react-addons-test-utils', { dev: true })
  await ignite.removeModule('@types/react-test-renderer', { dev: true })
  await ignite.removeModule('react-native-typescript-transformer', { dev: true })
}

module.exports = { add, remove }
