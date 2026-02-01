namespace EricWebPortfolio.Models;

public class Project
{
    public required string Name { get; set; }
    public required string Tech { get; set; }
    public required string Description { get; set; }
    public string? GithubUrl { get; set; }
}