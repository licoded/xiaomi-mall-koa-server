module.exports = function (worldsService) {
  let operations = {
    GET
  };

  function GET(ctx, next) {
    ctx.status = 200;
    ctx.body = worldsService.getWorlds(ctx.query.worldName);
  }

  // NOTE: We could also use a YAML string here.
  GET.apiDoc = {
    // summary is what really display
    summary: 'Returns worlds by name.',
    // operationId is not display when summary is set
    // it may used behind as componentkey OR css id
    operationId: 'getWorlds',
    parameters: [
      {
        in: 'query',
        name: 'worldName',
        required: true,
        type: 'string'
      }
    ],
    responses: {
      200: {
        description: 'A list of worlds that match the requested name.',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/World'
          }
        }
      },
      default: {
        description: 'An error occurred',
        schema: {
          additionalProperties: true
        }
      }
    }
  };

  return operations;
}