
"use client";

import { Button, Modal } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";

export default function DeleteConfirmationModal({
  isOpen,
  onOpenChange,
  title,
  message,
  itemName,
  warning,
  confirmText,
  onConfirm,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="border border-white/10 bg-[#202020] text-white sm:max-w-[400px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-red-500/10 text-red-400">
                <TrashBin className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-xl text-red-500">
                {title}
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-sm leading-6 text-white/60">
                {message}{" "}
                <span className="font-semibold italic text-red-400">
                  {itemName}
                </span>
              </p>

              {warning && (
                <p className="mt-2 text-sm text-white/40">
                  {warning}
                </p>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                className="flex-1"
                slot="close"
              >
                Cancel
              </Button>

              <Button
                className="flex-1 bg-red-500 font-semibold text-white hover:bg-red-600"
                onPress={onConfirm}
              >
                {confirmText}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
