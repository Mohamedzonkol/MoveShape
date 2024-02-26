using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using MoveShape.Hubs;

namespace MoveShape
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR();
        
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseFileServer();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<MoveShapeHub>("/moveShapeHub");
            });
        }
    }
}
