export interface Shift {
  id: number;
  userId: number;
  startTime: Date;
  endTime: Date;
  availableSlots: Slot[];
}

export interface Slot {
  shiftId: number;
  startTime: Date;
  endTime: Date;
  slotTaken: boolean;
  userId?: number;
}
