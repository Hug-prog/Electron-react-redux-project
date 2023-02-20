export const status = ['start', 'success', 'failure', 'loading'] as const;
export type StatusType = (typeof status)[number];
