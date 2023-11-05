export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://task-management-server-lilac.vercel.app/api/v1"
  );
  // return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
};
