using System.ComponentModel.DataAnnotations;

namespace WebApp.Models;

public class Projects
{
    public int Id { get; set; }

    [Required]
    public string? ProjectName { get; set; }

    [Required]
    public string? ClientName { get; set; }
    public string? Description { get; set; }

    [DataType(DataType.Date)]
    public DateTime StartDate { get; set; }

    [DataType(DataType.Date)]
    public DateTime EndDate { get; set; }

    [DataType(DataType.Currency)]
    public string? Budget { get; set; }

    public string? Status { get; set; }

    public string? UserId { get; set; }
}
