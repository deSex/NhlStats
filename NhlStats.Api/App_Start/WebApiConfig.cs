using System.Configuration;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NhlStats.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            var cors = new EnableCorsAttribute(ConfigurationManager.AppSettings["AllowedCorsUrl"], "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                "DefaultApi",
                "api/{controller}/{id}",
                new {id = RouteParameter.Optional}
                );
        }
    }
}