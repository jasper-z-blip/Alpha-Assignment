using System.ComponentModel.DataAnnotations;

namespace WebApp.Helpers;

[AttributeUsage(AttributeTargets.Property, AllowMultiple = false, Inherited = true)]
public class MustBeTrueAttribute : ValidationAttribute
{
    public override bool IsValid(object value)
    {
        if (value is bool b && b)
            return true;

        return false;
    }
}
