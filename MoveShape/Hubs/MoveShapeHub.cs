using Microsoft.AspNetCore.SignalR;

namespace MoveShape.Hubs
{
    public class MoveShapeHub : Hub
    {
        public async Task UpdateModel(ShapeModel clientModel)
        {
            await Clients.Others.SendAsync("updateShape", clientModel);
        }

    }

}

