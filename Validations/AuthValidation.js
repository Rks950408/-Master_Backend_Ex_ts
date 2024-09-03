import vine from "@vinejs/vine"
export const registerSchema=vine.object({
    name: vine.string().minLenght(2).maxLength(191),
    email: vine.string().email(),
    password: vine.string().minLenght(8).maxLength(100).confirmed(),
})