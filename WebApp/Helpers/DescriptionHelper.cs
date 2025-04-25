namespace WebApp.Helpers;

public static class DescriptionHelper
{
    public static bool IsHtmlEffectivelyEmpty(string html)
    {
        if (string.IsNullOrWhiteSpace(html)) return true;

        string cleaned = System.Text.RegularExpressions.Regex.Replace(html, "<.*?>", "").Trim();

        return string.IsNullOrWhiteSpace(cleaned);
    }
}
