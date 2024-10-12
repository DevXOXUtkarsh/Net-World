import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('64a50338-e6cd-40fa-af49-e32033d1a155', '1Bart.Hartmann-Smith@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'mno345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a822b00b-f487-4187-9e24-56d34d341ccf', '9Adrien_Buckridge@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=11', 'jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('36b6de15-1eba-4b89-99be-02bf5d040c4c', '25Dillon.Langosh@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=27', 'jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('756c3c5a-6767-4602-9431-10f7857cda9a', '33Adolf_Goodwin@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=35', 'mno345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('08e856a3-aea0-435d-a801-b5a8b2bd7fdd', '41Delpha26@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=43', 'def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d5f05b9a-338e-4f08-9629-1e2e72baae12', '49Natasha41@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=51', 'def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8a17df68-c5b4-4336-a3bf-a752a75ca02e', '57Angelina4@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('76f6fc86-c841-4573-9c0e-b66b9d22c8a9', '65Aidan61@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('9328fc4d-6c0c-41a2-ba6a-e826b871abcc', '73Autumn_Block86@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'mno345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d745308a-8146-4418-9913-09af1aa4e3b2', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6dcdc075-7aee-4fdf-a334-15efc360099c', 'Digital Pioneers LLC', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('0a9e9f8b-28ad-4b32-8a20-0cb450abe3f7', 'Global Solutions Ltd.', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b3e4948c-fa94-489d-83e9-8bae1de186e3', 'Digital Pioneers LLC', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a2ac291c-d329-407f-8859-87594adeea3e', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('587f6ee1-1b61-4c24-8e32-dfe7dfad8899', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4cebac48-d68e-41d2-b674-5958b1ffc020', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b8dadf6a-d2b7-4312-828c-bd1b9fe7f98c', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('7929ca79-e400-48f1-a535-602c20c38107', 'Creative Minds Co.', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e036b5f3-411a-491a-b212-d59385ed1c70', 'Digital Pioneers LLC', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c7e79cd6-1519-428e-aa6a-83c49b149c5b', 'Guest', '756c3c5a-6767-4602-9431-10f7857cda9a', '587f6ee1-1b61-4c24-8e32-dfe7dfad8899');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e7c1ffd6-edf1-460f-9b60-03460e1af717', 'Member', '64a50338-e6cd-40fa-af49-e32033d1a155', 'e036b5f3-411a-491a-b212-d59385ed1c70');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('62561271-db45-44c6-adeb-0f00b6b18146', 'Support', '64a50338-e6cd-40fa-af49-e32033d1a155', 'a2ac291c-d329-407f-8859-87594adeea3e');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('72228a8a-879f-42cb-832a-eb90fffe6105', 'Administrator', '756c3c5a-6767-4602-9431-10f7857cda9a', 'e036b5f3-411a-491a-b212-d59385ed1c70');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5ac72cb1-cb3f-4eef-9d91-dfad793e7a1d', 'Administrator', 'd5f05b9a-338e-4f08-9629-1e2e72baae12', 'e036b5f3-411a-491a-b212-d59385ed1c70');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f69ebd26-64fb-4ce4-85bd-7e40bffc6842', 'Moderator', 'd5f05b9a-338e-4f08-9629-1e2e72baae12', '587f6ee1-1b61-4c24-8e32-dfe7dfad8899');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ae2b4350-3bc8-4c9c-98eb-a52ad9bd8c3d', 'Guest', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9', '587f6ee1-1b61-4c24-8e32-dfe7dfad8899');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('94104fa0-eea1-4049-b520-50a51159d581', 'Support', 'd5f05b9a-338e-4f08-9629-1e2e72baae12', 'b8dadf6a-d2b7-4312-828c-bd1b9fe7f98c');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f186dc47-49c4-4d4b-83d9-5fff11733403', 'Guest', 'a822b00b-f487-4187-9e24-56d34d341ccf', '4cebac48-d68e-41d2-b674-5958b1ffc020');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e7e8ec98-269d-4b68-88e6-2a0861add44c', 'Administrator', '64a50338-e6cd-40fa-af49-e32033d1a155', '6dcdc075-7aee-4fdf-a334-15efc360099c');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('ca818892-029c-4cf1-88d3-bc21a631808a', 'eyJ1c2VySWQiOiI3ODkwMTIzNDU2Iiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('b43323e8-696a-4d7f-8d54-609a91a78de4', 'eyJ1c2VySWQiOiI5ODkwMTIzNDU2Iiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', 'a822b00b-f487-4187-9e24-56d34d341ccf');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d1c88350-f8b2-4326-831d-a28393fafc1d', 'eyJ1c2VySWQiOiIwMTIzNDU2Nzg5Iiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('b43976a0-0e72-4b8c-99fc-e358b1324649', 'eyJ1c2VySWQiOiI3ODkwMTIzNDU2Iiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', '36b6de15-1eba-4b89-99be-02bf5d040c4c');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d61f1b3c-0f8c-4b75-98e4-43de4ed4c161', 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', '36b6de15-1eba-4b89-99be-02bf5d040c4c');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('bd0d5d0b-be85-4027-a467-1b49993e08b0', 'eyJ1c2VySWQiOiI0NTY3ODkwMTIzIiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('e695c180-dfff-4f1a-b3a2-d15bba92e2d4', 'eyJ1c2VySWQiOiI0NTY3ODkwMTIzIiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('e8cf1f4a-6166-45ac-8e5a-ddb5f38e02cf', 'eyJ1c2VySWQiOiIwMTIzNDU2Nzg5Iiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('4fa731e9-f169-4df3-b273-2aedcc2fca97', 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('c91d6b3c-2916-4247-b1d9-b0b7d679d287', 'eyJ1c2VySWQiOiI5ODkwMTIzNDU2Iiwic3ViIjoiY2hhbm5lbCIsImV4cCI6MTYwOTQ1NjAwMH0', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd');

INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('c369dbb3-dd11-47e5-8df8-7d1cbc61c271', false, 'Family Group', 'https://i.imgur.com/YfJQV5z.png?id=153', '64a50338-e6cd-40fa-af49-e32033d1a155');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('2142deae-6ec9-4edb-be5a-fbce913c5b06', false, 'Family Group', 'https://i.imgur.com/YfJQV5z.png?id=157', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('929bde2e-351b-4715-b3f1-a3f76657f032', true, 'Book Club', 'https://i.imgur.com/YfJQV5z.png?id=161', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('e355e41a-6f74-4df6-be76-983b26b9554c', false, 'Project Discussion', 'https://i.imgur.com/YfJQV5z.png?id=165', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('465b6391-b6bf-4be1-be21-c9c76f136b04', true, 'Project Discussion', 'https://i.imgur.com/YfJQV5z.png?id=169', '64a50338-e6cd-40fa-af49-e32033d1a155');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('0cfce7c9-7fee-4de4-aa98-96ee78d050e2', false, 'Fitness Buddies', 'https://i.imgur.com/YfJQV5z.png?id=173', '36b6de15-1eba-4b89-99be-02bf5d040c4c');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('46c2b18c-6bc6-48eb-8079-02870a56e86b', false, 'Book Club', 'https://i.imgur.com/YfJQV5z.png?id=177', 'a822b00b-f487-4187-9e24-56d34d341ccf');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('232ef278-d838-4daa-a4f7-52851fda8dd0', false, 'Project Discussion', 'https://i.imgur.com/YfJQV5z.png?id=181', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('488622fc-06e5-44f7-9f30-ffd534946ee3', true, 'Book Club', 'https://i.imgur.com/YfJQV5z.png?id=185', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "Conversation" ("id", "isGroup", "name", "iconUrl", "createdById") VALUES ('b571d26d-1ac2-404a-9772-599e10f11f11', false, 'Fitness Buddies', 'https://i.imgur.com/YfJQV5z.png?id=189', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');

INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('c23ccf44-049d-4186-8c23-94110427237f', false, '929bde2e-351b-4715-b3f1-a3f76657f032', '9328fc4d-6c0c-41a2-ba6a-e826b871abcc');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('bfb4b5fa-5cce-4e57-b827-50479f630384', true, 'b571d26d-1ac2-404a-9772-599e10f11f11', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('2d3f492d-6a47-4a27-973f-61e4dd81101c', false, '929bde2e-351b-4715-b3f1-a3f76657f032', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('8575f7d1-d192-4905-bf83-3c461a70920c', false, 'e355e41a-6f74-4df6-be76-983b26b9554c', '64a50338-e6cd-40fa-af49-e32033d1a155');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('8e1dec53-b072-477a-9d4d-2f000ab0bda7', true, 'e355e41a-6f74-4df6-be76-983b26b9554c', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('e154327e-eec9-4480-8910-913c3984fae4', false, 'e355e41a-6f74-4df6-be76-983b26b9554c', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('89aa7928-e694-4096-b5c3-09b7f9f47a0d', true, '465b6391-b6bf-4be1-be21-c9c76f136b04', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('745977e2-6cea-4784-adb0-b3c51a29c995', true, '2142deae-6ec9-4edb-be5a-fbce913c5b06', '36b6de15-1eba-4b89-99be-02bf5d040c4c');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('9c8b5548-30f6-4016-9182-4ec942e17e77', false, '929bde2e-351b-4715-b3f1-a3f76657f032', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "ConversationParticipant" ("id", "isAdmin", "conversationId", "userId") VALUES ('fbacfdea-d848-44c3-9870-21de4cbda22c', true, '0cfce7c9-7fee-4de4-aa98-96ee78d050e2', '36b6de15-1eba-4b89-99be-02bf5d040c4c');

INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('ef16f01e-9b58-4fd1-944a-a54410a46394', 'Lets catch up over coffee this weekend.', 'location', 'https://i.imgur.com/YfJQV5z.png?id=213', '2024-07-14T01:21:53.853Z', 'e355e41a-6f74-4df6-be76-983b26b9554c', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('285551eb-b7ea-4fd2-ad04-5a477f601fe0', 'Hey how are you doing today', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=218', '2024-01-16T19:37:11.190Z', '465b6391-b6bf-4be1-be21-c9c76f136b04', '756c3c5a-6767-4602-9431-10f7857cda9a');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('99689f70-f632-4182-9f78-1a8a9ede0d0a', 'Dont forget the meeting at 3 PM.', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=223', '2024-01-26T01:38:45.030Z', '488622fc-06e5-44f7-9f30-ffd534946ee3', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('a384faf5-66e3-4846-b3d2-04ffabca26e5', 'Hey how are you doing today', 'image', 'https://i.imgur.com/YfJQV5z.png?id=228', '2024-11-04T20:23:09.268Z', 'e355e41a-6f74-4df6-be76-983b26b9554c', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('e8a54fa4-56a4-40db-8965-261e673ad3a7', 'Lets catch up over coffee this weekend.', 'image', 'https://i.imgur.com/YfJQV5z.png?id=233', '2024-12-19T16:48:56.991Z', '232ef278-d838-4daa-a4f7-52851fda8dd0', '9328fc4d-6c0c-41a2-ba6a-e826b871abcc');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('47259982-3be5-48cf-924c-b75b8377bf31', 'Hey how are you doing today', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=238', '2024-07-02T00:46:42.197Z', '2142deae-6ec9-4edb-be5a-fbce913c5b06', '64a50338-e6cd-40fa-af49-e32033d1a155');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('187239bb-47af-4fc9-99dc-67f17041034c', 'Dont forget the meeting at 3 PM.', 'location', 'https://i.imgur.com/YfJQV5z.png?id=243', '2024-08-07T01:00:03.161Z', '929bde2e-351b-4715-b3f1-a3f76657f032', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('bafd6487-fb48-4177-b970-c71c860437ec', 'Happy Birthday Hope you have a great day', 'location', 'https://i.imgur.com/YfJQV5z.png?id=248', '2024-10-02T23:28:24.135Z', '2142deae-6ec9-4edb-be5a-fbce913c5b06', '756c3c5a-6767-4602-9431-10f7857cda9a');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('9b02f6e1-c82d-4310-8973-307a35ae109c', 'Lets catch up over coffee this weekend.', 'video', 'https://i.imgur.com/YfJQV5z.png?id=253', '2024-10-27T05:04:00.656Z', '232ef278-d838-4daa-a4f7-52851fda8dd0', '756c3c5a-6767-4602-9431-10f7857cda9a');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "sentAt", "conversationId", "senderUserId") VALUES ('1d596358-5dcd-4f37-bd3e-e5147b902935', 'Lets catch up over coffee this weekend.', 'text', 'https://i.imgur.com/YfJQV5z.png?id=258', '2025-08-07T22:36:45.570Z', '929bde2e-351b-4715-b3f1-a3f76657f032', '756c3c5a-6767-4602-9431-10f7857cda9a');

INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('fd419133-5170-47ee-9364-f817fa465d3c', 'failed', '2024-01-15T02:38:29.638Z', 'e8a54fa4-56a4-40db-8965-261e673ad3a7', '36b6de15-1eba-4b89-99be-02bf5d040c4c');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('180a7f7a-4a3a-4ae1-baa5-5e8938809f2a', 'read', '2024-05-27T15:43:40.548Z', 'bafd6487-fb48-4177-b970-c71c860437ec', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('9f040213-378b-444c-b7f4-3395ce0cad1e', 'sent', '2025-08-23T10:33:37.453Z', '1d596358-5dcd-4f37-bd3e-e5147b902935', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('2c65c810-9efa-4b2d-a0b8-f30b10429bf5', 'failed', '2025-03-08T07:44:45.336Z', 'bafd6487-fb48-4177-b970-c71c860437ec', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('356478bb-ccd2-483e-9cbe-55953504cef6', 'sent', '2025-06-27T18:42:18.184Z', '285551eb-b7ea-4fd2-ad04-5a477f601fe0', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('1d9dfa22-7b32-4eae-bfd2-689f2651d5dc', 'failed', '2024-08-06T22:00:39.061Z', 'e8a54fa4-56a4-40db-8965-261e673ad3a7', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('be9ba7f9-ac38-4918-8da0-fb0d1a93c188', 'failed', '2023-10-23T03:07:40.644Z', '285551eb-b7ea-4fd2-ad04-5a477f601fe0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('7dcbdee5-66fa-400c-af00-cc98c57d585b', 'delivered', '2025-01-03T02:03:02.904Z', '47259982-3be5-48cf-924c-b75b8377bf31', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('2b4526df-2c8a-439b-aeb9-20f2d9cda5e3', 'delivered', '2024-03-18T06:40:53.372Z', 'ef16f01e-9b58-4fd1-944a-a54410a46394', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9');
INSERT INTO "MessageReceipt" ("id", "status", "statusAt", "messageId", "recipientUserId") VALUES ('da553071-b304-4203-a695-017a7217e375', 'delivered', '2025-08-27T02:52:43.139Z', '47259982-3be5-48cf-924c-b75b8377bf31', '756c3c5a-6767-4602-9431-10f7857cda9a');

INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('22fad604-0bf1-4756-8cc2-20e86671c619', 'Exploring new hiking trails this weekend.', 'https://i.imgur.com/YfJQV5z.png?id=292', 'Friends Only', '64a50338-e6cd-40fa-af49-e32033d1a155');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('e6ac14f9-e20d-44f0-81e0-b6e4bf03e666', 'Enjoying a sunny day at the beach', 'https://i.imgur.com/YfJQV5z.png?id=296', 'Family', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('5fa57a1f-bf5f-4570-bbd2-e378cdd88a1d', 'Exploring new hiking trails this weekend.', 'https://i.imgur.com/YfJQV5z.png?id=300', 'Family', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('98311565-2b81-46ab-9d40-9ea91c7092e1', 'Enjoying a sunny day at the beach', 'https://i.imgur.com/YfJQV5z.png?id=304', 'Custom', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('c8766dc9-1573-46d1-9755-ce50747600bb', 'Enjoying a sunny day at the beach', 'https://i.imgur.com/YfJQV5z.png?id=308', 'Public', 'd5f05b9a-338e-4f08-9629-1e2e72baae12');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('8c9df220-39e7-4cc6-b1ff-4f7e3f84aca4', 'Feeling grateful for all the little things.', 'https://i.imgur.com/YfJQV5z.png?id=312', 'Family', '36b6de15-1eba-4b89-99be-02bf5d040c4c');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('09735dd9-11e7-45a7-a115-5fb1f44a93e3', 'Just finished reading a great book.', 'https://i.imgur.com/YfJQV5z.png?id=316', 'Private', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('56b08f31-a841-4ffc-8bde-0faa98f1e952', 'Cooking up a storm in the kitchen tonight', 'https://i.imgur.com/YfJQV5z.png?id=320', 'Private', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('bc6be2d0-24c3-4aa7-bd49-0971831f8654', 'Enjoying a sunny day at the beach', 'https://i.imgur.com/YfJQV5z.png?id=324', 'Private', 'a822b00b-f487-4187-9e24-56d34d341ccf');
INSERT INTO "StatusUpdate" ("id", "content", "mediaUrl", "privacySetting", "userId") VALUES ('b876808b-2c10-4d65-b444-a7bb0d96aa6b', 'Just finished reading a great book.', 'https://i.imgur.com/YfJQV5z.png?id=328', 'Family', '756c3c5a-6767-4602-9431-10f7857cda9a');

INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('8a31be60-633f-4723-bd37-d3b6338d3b0b', 'Bob Smith', '8a17df68-c5b4-4336-a3bf-a752a75ca02e', '64a50338-e6cd-40fa-af49-e32033d1a155');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('c603d72c-ae96-4f52-96c4-d3d5dea05fb8', 'Bob Smith', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '64a50338-e6cd-40fa-af49-e32033d1a155');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('4b98bbdf-0c57-4e82-a2f4-b048471d37c7', 'Charlie Brown', '36b6de15-1eba-4b89-99be-02bf5d040c4c', 'a822b00b-f487-4187-9e24-56d34d341ccf');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('384a52a8-9e68-4b22-9c47-5a9b5f347a61', 'Diana Prince', '9328fc4d-6c0c-41a2-ba6a-e826b871abcc', '36b6de15-1eba-4b89-99be-02bf5d040c4c');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('0d1ff220-6bdb-4cc3-bd9c-896a1f724e60', 'Bob Smith', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('cf4c5409-2e11-4383-b1f1-e888c978da36', 'Bob Smith', '36b6de15-1eba-4b89-99be-02bf5d040c4c', '8a17df68-c5b4-4336-a3bf-a752a75ca02e');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('5f2f2331-4981-4547-9d0f-71b039d9bdb6', 'Alice Johnson', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd', '76f6fc86-c841-4573-9c0e-b66b9d22c8a9');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('aa898a13-7a6d-4c6f-b72c-2f3cb42067d7', 'Bob Smith', '36b6de15-1eba-4b89-99be-02bf5d040c4c', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('3fa77ec0-b667-42e7-baae-870bb8115ec9', 'Diana Prince', '08e856a3-aea0-435d-a801-b5a8b2bd7fdd', '756c3c5a-6767-4602-9431-10f7857cda9a');
INSERT INTO "Contact" ("id", "contactName", "userId", "contactUserId") VALUES ('9f50617d-eeeb-47ab-868c-c09e1319f930', 'Ethan Hunt', '9328fc4d-6c0c-41a2-ba6a-e826b871abcc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
