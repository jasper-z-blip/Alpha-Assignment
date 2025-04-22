using Microsoft.AspNetCore.Authorization;
using WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;

[Authorize]
public class DashboardController : Controller
{
    private readonly AppDbContext _context;

    public DashboardController(AppDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        var allCount = _context.Projects.Count();
        var startedCount = _context.Projects.Count(p => p.Status == "Started");
        var completedCount = _context.Projects.Count(p => p.Status == "Completed");

        ViewData["AllCount"] = allCount;
        ViewData["StartedCount"] = startedCount;
        ViewData["CompletedCount"] = completedCount;

        var projects = _context.Projects.ToList();
        return View(projects);
    }
}

