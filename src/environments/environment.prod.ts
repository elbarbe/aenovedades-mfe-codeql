export const environment = {
  version: '4.0.0',
  prefix: 'aenovedades',
  production: true,
  standalone: false,
  msal: {
    clientId: 'feac80f8-9e48-40e1-bcd4-a1b75148ec44',
    authority: 'https://login.microsoftonline.com/8ca9fee9-9f9d-4340-8cbb-05498e9baa9a',
    redirectUri: 'http://localhost:4205'
  },  
  urlms: 'http://localhost:8080',
  bhservicesinfo: {
    documental: {
      url: '',
      idfolder_docidentificacion: '',
      idfolder_docsolicitud: '',
      documentClass_docidentificacion: '',
      documentClass_docsolicitud: ''
    }
  }
};

