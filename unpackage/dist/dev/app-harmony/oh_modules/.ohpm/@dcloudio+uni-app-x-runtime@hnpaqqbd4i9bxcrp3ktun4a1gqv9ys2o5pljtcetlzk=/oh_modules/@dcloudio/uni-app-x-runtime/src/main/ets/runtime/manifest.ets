interface ManifestVersion {
  name: string
  code: string
}

interface IManifestUniAppX {
  compilerVersion: string
}

interface IManifestAppHarmony {
  initPrivacyAuthorization?: string
}

export interface Manifest {
  id: string
  name: string
  version: ManifestVersion
  description?: string
  'uni-app-x': IManifestUniAppX
  'app-harmony'?: IManifestAppHarmony
}
