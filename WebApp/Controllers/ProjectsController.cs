using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using WebApp.Models;

namespace WebApp.Controllers;

[Authorize]
public class ProjectsController : Controller
{
    private readonly AppDbContext _context;

    public ProjectsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Create(Projects project)
    {
        project.UserId = "dev-user";

        if (!ModelState.IsValid)
        {
            foreach (var entry in ModelState)
            {
                foreach (var error in entry.Value.Errors)
                {
                    Console.WriteLine($"Fält: {entry.Key}, Fel: {error.ErrorMessage}");
                }
            }

            return BadRequest(ModelState);
        }

        _context.Projects.Add(project);
        await _context.SaveChangesAsync();

        return RedirectToAction("Index", "Dashboard");
    }

    [HttpPost]
    public async Task<IActionResult> Edit(Projects project)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var existing = _context.Projects.Find(project.Id);
        if (existing == null)
        {
            return NotFound();
        }

        existing.ProjectName = project.ProjectName;
        existing.ClientName = project.ClientName;
        existing.Description = project.Description;
        existing.StartDate = project.StartDate;
        existing.EndDate = project.EndDate;
        existing.Budget = project.Budget;
        existing.Status = project.Status;

        await _context.SaveChangesAsync();

        return RedirectToAction("Index", "Dashboard");
    }

    [HttpPost]
    public async Task<IActionResult> Delete(int id)
    {
        Console.WriteLine($"Project med ID {id} raderat.");

        var project = _context.Projects.Find(id);
        if (project == null)
        {
            return NotFound();
        }

        _context.Projects.Remove(project);
        await _context.SaveChangesAsync();

        return RedirectToAction("Index", "Dashboard");
    }
}
