import pronounInfo from "../schemas/pronounInfo";
import { Modal } from "./modals";
import { ActionRowBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export class GenderPickerModal extends Modal {
  constructor(id: string, datas: any | null) {
    super(id, "paramètres");
    const aIterations = new TextInputBuilder()
      .setCustomId("accordIter")
      .setLabel("nombre d'accords  voulu")
      .setValue("1")
      .setStyle(TextInputStyle.Short);

    const pIterations = new TextInputBuilder()
      .setCustomId("pronounIter")
      .setLabel("nombre de pronoms voulu")
      .setValue("1")
      .setStyle(TextInputStyle.Short);
    const pronomsInput = new TextInputBuilder()
      .setCustomId("pronoms")
      .setLabel("liste de pronoms")
      .setValue("il,iel,elle,ael")
      .setStyle(TextInputStyle.Paragraph);

    const accordsInput = new TextInputBuilder()
      .setCustomId("accords")
      .setLabel("liste d'accords")
      .setValue("masc,fem,neutre,épicène")
      .setStyle(TextInputStyle.Paragraph);

    if (datas) {
      pronomsInput.setValue((datas.pronouns as Array<string>).join(","));
      accordsInput.setValue((datas.accords as Array<string>).join(","));
    }
    const firstActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(pronomsInput);

    const secondActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(accordsInput);

    const thirdActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(pIterations);

    const fourthActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(aIterations);

    this.modal.addComponents(
      firstActionRow,
      secondActionRow,
      thirdActionRow,
      fourthActionRow
    );
  }
}
