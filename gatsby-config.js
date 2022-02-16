const isProduction = process.env.NODE_ENV === 'production'
const isRunningGatsbyServe = process.env.GATSBY_SERVE
const repo = process.env.LOCAL_REPO || 'PublicCloudEng'
const project = 'public-cloud-docs'
let pathPrefix = ''
if (isProduction && !isRunningGatsbyServe) {
  pathPrefix = '/pages/'+repo+'/'+project
}
const channelId = 'CE9BS7B36'
const paypalId = 'T0G9AL7B8'
const slackUrl = `slack://channel?team=${paypalId}&id=${channelId}`
module.exports = {
  pathPrefix: pathPrefix,
  plugins: [
    {
      resolve: '@paypalcorp/gatsby-theme-webplatform-docs',
      options: {
        root: __dirname,
        contentDir: '/source',
        title: 'Cloud Docs',
        title: 'Google Cloud Platform',
        subtitle: 'Subtitle',
        description: 'description',
        logo: 'https://www.paypalobjects.com/webstatic/icon/pp64.png',
@@ -33,44 +33,63 @@ module.exports = {
          [`${pathPrefix}/announcements`]: {
            text: 'Announcements'
          },
          [`${pathPrefix}/docs`]: {
          [`${pathPrefix}/gcp`]: {
            text: 'Home'
          }
        },
        sidebarCategories: {
          null: [
            'docs'
            'gcp'
          ],
          'GCP User Guide': [
            'google/user-guide/access',
            'google/user-guide/createvm',
            'google/user-guide/cnameregistration',
            'google/user-guide/createbigtable',
            'google/user-guide/createbucket',
            'google/user-guide/createpubsub',
            'google/user-guide/configurepuppetgroup',
            'google/user-guide/dataproc',
            'google/user-guide/gke',
            'google/user-guide/cmek-keys',
            'google/user-guide/cmekresourcedeletion',
            'google/user-guide/howtossh',
            'google/user-guide/support',
            'google/user-guide/reports',
            'google/user-guide/hostprojects',
            'google/user-guide/reservestaticip',
            'google/user-guide/cloudsql',
            'google/user-guide/vertexai',
            'google/user-guide/serviceaccounts',
            'google/user-guide/mtaservers',
            'google/user-guide/spanner'
          'AUTHN AND AUTHZ':[
            'gcp/user-guide/access',
            'gcp/user-guide/reports',
            'gcp/user-guide/gcpwebconsole',
            'gcp/user-guide/gcloudcli',
            'gcp/user-guide/serviceaccounts'
          ],
          'Azure User Guide': [
            'azure/sample'
          'GOOGLE COMPUTE ENGINE':[
            'gcp/user-guide/createvm',
            'gcp/user-guide/howtossh',
            'gcp/user-guide/reservestaticip',
            'gcp/user-guide/cnameregistration',
            'gcp/user-guide/configurepuppetgroup',
            'gcp/user-guide/mtaservers'
          ],
          'Developer Guide': [
            'google/developer-guide/sample'
          'GOOGLE CLOUD STORAGE':[
            'gcp/user-guide/createbucket'
          ],
          'FAQs': ['faq']
          'GOOGLE PUB/SUB':[
            'gcp/user-guide/createpubsub',
          ],
          'GOOGLE KUBERNETES ENGINE':[
            'gcp/user-guide/gke'
          ],
          'GOOGLE BIGTABLE':[
            'gcp/user-guide/createbigtable',
          ],
          'GOOGLE VERTEX AI':[
            'gcp/user-guide/vertexai'
          ],
          'GCP KMS':[
            'gcp/user-guide/cmek-keys',
            'gcp/user-guide/cmekresourcedeletion'
          ],
          'GCP DATAPROC':[
            'gcp/user-guide/dataproc'
          ],
          "GCP SUPPORT":[
            'gcp/user-guide/support'
          ],
          "GCP CLOUDSQL":[
            'gcp/user-guide/cloudsql'
          ],
          'GCP CLOUD SPANNER':[
            'gcp/user-guide/spanner'
          ],
          'GCP NETWORKING':[
            'gcp/user-guide/hostprojects'
          ]
        },
        defaultVersion: 2,
        versions: {
          1: 'version-1'
        },
        source: 'source'
      }
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [
          {
            name: 'en'
          }
        ],
        fields: [
          {
            name: 'title',
            store: true,
            attributes: {
              boost: 20
            }
          },
          {
            name: 'description',
            store: true
          },
          {
            name: 'content'
          },
          {
            name: 'url',
            store: true
          }
        ],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawBody,
            url: node => pathPrefix + node.fields.slug
          }
        },
        filename: 'search_index.json'
      }
    }
  ]
}
