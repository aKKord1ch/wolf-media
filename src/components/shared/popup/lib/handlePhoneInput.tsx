
  const handlePhoneInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): string => {
    const digits = event.target.value.replace(/\D/g, "");

    if (!digits) return "";

    const normalized =
      digits.startsWith("7") || digits.startsWith("8")
        ? digits.slice(1)
        : digits;

    let formatted = "+7";

    if (normalized.length > 0) formatted += ` (${normalized.slice(0, 3)}`;
    if (normalized.length >= 4) formatted += `) ${normalized.slice(3, 6)}`;
    if (normalized.length >= 7) formatted += `-${normalized.slice(6, 8)}`;
    if (normalized.length >= 9) formatted += `-${normalized.slice(8, 10)}`;

    return formatted;
  };

  export default handlePhoneInput