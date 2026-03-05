import { Box, Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  role: string;
  tools: string;
  overview: string;
  solution: string;
  impact: string;
}

export default function ProjectCard({
  title,
  role,
  tools,
  overview,
  solution,
  impact,
}: ProjectCardProps) {
  return (
    <Box sx={{ p: 3, bgcolor: "#F3F4F6", borderRadius: 2 }}>
      <Typography variant="h5">{title}</Typography>
      <Typography color="secondary">
        {role} — {tools}
      </Typography>
      <Typography mt={2}>
        <strong>Overview:</strong> {overview}
      </Typography>
      <Typography mt={1}>
        <strong>Solution:</strong> {solution}
      </Typography>
      <Typography mt={1}>
        <strong>Impact:</strong> {impact}
      </Typography>
    </Box>
  );
}
