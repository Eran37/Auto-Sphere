export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Auto-Sphere API',
    version: '1.0.0',
    description: 'API documentation for Auto-Sphere automation solutions',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  paths: {
    '/api/contact': {
      post: {
        tags: ['Contact'],
        summary: 'Submit contact form',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name', 'company', 'phone', 'email', 'problem'],
                properties: {
                  name: {
                    type: 'string',
                    description: 'Full name',
                  },
                  company: {
                    type: 'string',
                    description: 'Company name',
                  },
                  phone: {
                    type: 'string',
                    description: 'Phone number',
                  },
                  email: {
                    type: 'string',
                    format: 'email',
                    description: 'Email address',
                  },
                  problem: {
                    type: 'string',
                    description: 'Description of the problem or requirements',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Contact form submitted successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                    },
                    data: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Server error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/chat': {
      post: {
        tags: ['Chat'],
        summary: 'Send chat message',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['message', 'userId'],
                properties: {
                  message: {
                    type: 'string',
                    description: 'Chat message content',
                  },
                  userId: {
                    type: 'string',
                    format: 'uuid',
                    description: 'User ID',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Chat message saved successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                    },
                    data: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Server error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};