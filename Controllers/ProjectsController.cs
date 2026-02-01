using Microsoft.AspNetCore.Mvc;

namespace EricWebPortfolio.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new[]
        {
            new { name = "Portfolio Website", tech = "React + ASP.NET Core" },
            new { name = "Music Project", tech = "C# + Audio" }
        });
    }
}