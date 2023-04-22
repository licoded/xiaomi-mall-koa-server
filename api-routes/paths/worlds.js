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
    tags: ['test-examples'],

    // summary is what really display
    summary: 'Returns worlds by name.',

    // operationId is not display when summary is set
    // it may be used behind as componentkey OR css id
    // Yes, It is used in the url `http://localhost:18002/doc.html#/cloud1/default/getWorlds`  
    //                               the last word -- `getWorlds` is just the operationId
    // So, without `operationId` field, the Knife4j will crash!
    operationId: 'getWorlds',
    parameters: [
      {
        in: 'query',
        name: 'worldName',
        required: true,
        schema: {
          type: "string",
          // default: "Earth"
        },
      }
    ],
    responses: {
      200: {
        description: 'A list of worlds that match the requested name.',
        content: {
          "application/json": {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/World',
              },
              example: [{name: 'Earth'}],
            },
            examples: {
              foo: {
                summary: 'A foo example.',
                value: [{name: 'foo'}],
              },
              bar: {
                summary: 'A bar example.',
                value: [{name: 'bar'}],
              },
            },
          },
        },
      },
      default: {
        description: 'An error occurred',
      },
    },
  };

  return operations;
}