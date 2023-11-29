using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AuthConfigurations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Status",
                table: "Users",
                type: "bit",
                nullable: false,
                defaultValue: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.InsertData(
                table: "OperationClaims",
                columns: new[] { "Id", "CreatedDate", "DeletedDate", "Name", "UpdatedDate" },
                values: new object[] { 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Admin", null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AuthenticatorType", "CreatedDate", "DeletedDate", "Email", "FirstName", "LastName", "PasswordHash", "PasswordSalt", "Status", "UpdatedDate" },
                values: new object[] { 1, 0, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "admin@admin.com", "Admin", "NArchitecture", new byte[] { 57, 65, 36, 253, 105, 40, 15, 68, 52, 87, 44, 120, 33, 177, 105, 182, 238, 85, 136, 169, 204, 251, 118, 176, 35, 255, 105, 4, 1, 200, 148, 81, 139, 120, 118, 121, 171, 32, 223, 11, 169, 92, 104, 252, 99, 8, 99, 0, 195, 134, 225, 253, 34, 172, 66, 174, 205, 49, 85, 75, 104, 175, 22, 200 }, new byte[] { 101, 239, 203, 23, 95, 167, 105, 198, 137, 245, 135, 169, 129, 112, 131, 208, 81, 246, 119, 55, 253, 77, 75, 240, 58, 226, 129, 9, 171, 16, 5, 11, 108, 228, 14, 135, 4, 56, 192, 8, 221, 184, 91, 96, 103, 184, 176, 0, 110, 128, 107, 16, 39, 252, 42, 180, 43, 35, 138, 175, 90, 237, 237, 213, 73, 190, 97, 164, 248, 187, 174, 155, 11, 232, 239, 202, 235, 245, 45, 43, 149, 185, 166, 215, 114, 15, 205, 180, 224, 149, 63, 253, 34, 111, 30, 183, 252, 11, 10, 77, 23, 83, 232, 55, 154, 217, 157, 166, 197, 216, 23, 152, 143, 17, 41, 105, 140, 35, 128, 93, 134, 118, 211, 252, 226, 119, 114, 143 }, true, null });

            migrationBuilder.InsertData(
                table: "UserOperationClaims",
                columns: new[] { "Id", "CreatedDate", "DeletedDate", "OperationClaimId", "UpdatedDate", "UserId" },
                values: new object[] { 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 1, null, 1 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "UserOperationClaims",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "OperationClaims",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.AlterColumn<bool>(
                name: "Status",
                table: "Users",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldDefaultValue: true);
        }
    }
}
